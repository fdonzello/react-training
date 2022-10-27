import { useInputChange } from "../../forms";
import './news-form.scss';

export function Textarea() {
    const [description, onChangeDescription] = useInputChange('description', '');

    return (
        <textarea
            name="description"
            value={description}
            onChange={onChangeDescription}></textarea>
    );
}

export function Select() {
    const [value, , setValue] = useInputChange('city', 'rome');

    return (
        <select value={value} onChange={setValue}>
            <option value="new-york">New York</option>
            <option value="rome">Rome</option>
            <option value="London">London</option>
        </select>
    );
}

export function Checkbox() {
    const [hasAccepted, , setValue] = useInputChange('accepted', false);

    return (
        <input
            name="isGoing"
            type="checkbox"
            checked={hasAccepted}
            onChange={setValue} />
    );
}
