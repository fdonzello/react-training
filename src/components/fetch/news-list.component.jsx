import { useEffect } from "react";
import { News } from "./news.component";

export function NewsList({ newsList }) {
    return (
        <ul>
            {newsList.map(news => <News key={news.id} text={news.description}></News>)}
        </ul>
    )
}