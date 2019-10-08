export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_BASKET":
            return [...action.payload];

        case "ADD_TO_BASKET":
            return [...state, action.payload];
        case "CLEAR_BASKET":
                return [];
        default:
            return state;
        }
}