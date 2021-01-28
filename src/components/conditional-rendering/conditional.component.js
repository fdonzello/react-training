export const ConditionalRendering = ({ show }) => {

    if (show) {
        return (
            <div>
                yes show it!
            </div>
        )
    }

    return (
        <div>
            oh now, hide it!
        </div>
    )
}