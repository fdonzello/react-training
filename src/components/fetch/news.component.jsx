import { Link, useHistory } from "react-router-dom"

export function News({ id, title, text, compact, onPostDelete }) {

    const onDelete = async () => {
        const req = await fetch(`http://localhost:3001/news/${id}`, {
            method: 'DELETE'
        });

        if (!req.ok) {
            return;
        }

        onPostDelete();

    }

    if (compact) {
        return (
            <article className="uk-article">
                <h1 className="uk-article-title">{title}</h1>
            </article>
        )
    }
    return (
        <article className="uk-article">
            <h1 className="uk-article-title">{title}</h1>
            <p className="uk-article-meta">{text}</p>

            <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                <div>
                    <Link to={`/news-edit/${id}`} className="uk-button uk-button-text">Edit</Link>
                </div>
                <div>
                    <button onClick={onDelete} className="uk-button uk-button-text">Delete</button>
                </div>
            </div>

        </article>
    )
}