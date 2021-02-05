import { useRef, useState } from "react"

export function UncontrolledNewsForm() {
    const title = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder="title"
                ref={title}
            />
        </form>
    )
}









