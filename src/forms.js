import { useState } from "react"

export const useInputChange = (name, initialValue) => {
    const [input, setInput] = useState({ [name]: initialValue })


    const onChange = (e) => setInput({
        ...input,
        [name]: e.currentTarget.value
    })

    const setValue = (value) => {
        setInput({
            ...input,
            [name]: value
        })
    }

    return [input[name], setValue, onChange]
}

