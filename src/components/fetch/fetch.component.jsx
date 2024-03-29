import { useEffect, useReducer } from "react";
import { NewsList } from "./news-list.component";

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading: true,
            }
        case 'loaded':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        default:
            return {
                ...state,
                loading: true
            }
    }
}

export function FetchNews() {
    const initialState = {
        loading: false,
        items: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const loadNews = () => {
        fetch('http://localhost:3250/news')
            .then(r => r.json())
            .then(items => {
                dispatch({ type: 'loaded', payload: items })
            });
    }

    useEffect(() => {
        dispatch({ type: 'loading' });

        setTimeout(() =>
            loadNews(), 1000)
    }, []);

    return (
        <NewsList newsList={state.items} onPostDelete={loadNews} />
    )
}

