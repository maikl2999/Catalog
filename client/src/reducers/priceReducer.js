const INITIAL_STATE = {
    price_0_20: false,
    price_20_30: false, 
    price_30_50: false, 
    price_50_100: false, 
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_PRICE":
            return { ...state, [action.payload.id]: action.payload.checked };
        default:
            return state;
    }
};