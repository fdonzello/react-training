import { useState } from "react";
import { News } from "./news.component";

export function NewsList({ newsList, onPostDelete }) {
    const [compact, setCompact] = useState(false);

    const toggleCompact = () => setCompact(!compact);

    return (
        <div>
            <button onClick={toggleCompact}>
                {compact ? 'Show more' : 'Show less'}
            </button>
            <ul>
                {newsList.map(news =>
                    <News
                        key={news.id}
                        compact={compact}
                        id={news.id}
                        title={news.title}
                        text={news.description}
                        onPostDelete={onPostDelete}></News>
                )}
            </ul>
        </div>

    )
}