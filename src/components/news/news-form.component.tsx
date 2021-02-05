import { SyntheticEvent, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useInputChange } from "../../forms";
import './news-form.scss';

const isFormValid = (formValue: any): { errors?: any, valid: boolean } => {
    if (!formValue.title || formValue.title.length === 0) {
        return {
            errors: {
                title: 'Title is empty'
            },
            valid: false
        }
    }

    if (!formValue.description || formValue.description.length === 0) {
        return {
            errors: {
                title: 'Description is empty'
            },
            valid: false
        }
    }

    return {
        valid: true,
        errors: null
    };
}

export function NewsForm() {
    const history = useHistory();

    const [title, setTitle, onChangeTitle] = useInputChange('title', '')
    const [description, setDescription, onChangeDescription] = useInputChange('description', '');


    useNewsLoader(setTitle, setDescription);

    const { id } = useParams<{ id: string }>();
    const isEdit = id !== undefined;

    const formValue = {
        title,
        description
    };
    const { valid: isValid, errors } = isFormValid(formValue);

    const errorsSummary = errors ? <div><h3>Errors: </h3>{JSON.stringify(errors)}</div> : <></>
    const formSummary = formValue ? <div><h3>Value: </h3>{JSON.stringify(formValue)}</div> : <></>

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const url = isEdit ?
            `http://localhost:3001/news/${id}` :
            'http://localhost:3001/news';

        const req = await fetch(url, {
            method: isEdit ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        });

        if (!req.ok) {
            alert('an error occurred with the POST request')
            return
        }

        history.replace('/news');
    }

    return (
        <div className="form-container">

            <h1 className="uk-heading-small">{isEdit ? 'Edit' : 'Create'} News</h1>

            <form onSubmit={onSubmit}>

                {formSummary}
                {errorsSummary}

                <br />

                <input
                    name="title"
                    className="uk-input"
                    placeholder="Title"
                    value={title}
                    onChange={onChangeTitle} />

                <textarea
                    name="description"
                    className="uk-textarea"
                    placeholder="Description"
                    value={description}
                    onChange={onChangeDescription}></textarea>


                <button className="uk-button uk-button-default" disabled={!isValid}>{isEdit ? 'Save' : 'Create'}</button>
            </form>
        </div>
    );
}

const useNewsLoader = (setTitle: (v: string) => void, setDescription: (v: string) => void) => {

    const { id } = useParams<{ id: string }>();

    useEffect(() => {

        async function run() {

            if (!id) {
                return
            }

            const newsRequest = await fetch(`http://localhost:3001/news/${id}`);

            if (!newsRequest.ok) {
                console.error('failed to fetch the news')
                return
            }

            const news = await newsRequest.json();

            setTitle(news.title);
            setDescription(news.description);
        }

        run();
    }, []);

}