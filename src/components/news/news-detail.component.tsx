import { useReducer } from "react"

interface State {
    loading: boolean;
}

enum Actions {
    Loading = '[News Detail] Loading',
    Loaded = '[News Detail] Loaded'
}

const reducer = (state: State, action: { type: string, payload: State }) => {
    switch (action.type) {
        case Actions.Loading:
            return {
                ...state,
                loading: false
            }
        case Actions.Loaded:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export const NewsDetail = () => {

    const initialState = {
        loading: false,
    };

    const [state, dispatcher] = useReducer(reducer, initialState);

    if (state.loading) {
        return (
            <div data-uk-spinner></div>
        )
    }

    return (
        <article className="uk-comment">
            <header className="uk-comment-header">
                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src="images/avatar.jpg" width="80" height="80" alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">12 days ago</a></li>
                            <li><a href="#">Reply</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="uk-comment-body">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </article>
    )
}