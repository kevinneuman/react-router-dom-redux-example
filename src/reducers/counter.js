export default function reducer(state = {
    value: 3
}, action) {
    switch (action.type) {
        case "COUNTER_DECREMENT": {
            return {
                ...state,
                value: state.value - 1
            }
        }
        case "COUNTER_RESET": {
            return {
                ...state,
                value: 3
            }
        }
        default:
            return state;
    }
}