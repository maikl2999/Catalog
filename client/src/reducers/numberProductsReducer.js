export default (state = 24, action) => {
    switch(action.type) {
        case "CHANGE_NUMBER_OF_PRODUCTS":
            return action.payload; 
        default:
            return state;
    }
};