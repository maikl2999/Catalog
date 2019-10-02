const INITIAL_STATE = {
    sortBy: 'position',
    cb: {
        name:(a, b) => {
            if(a.name < b.name) return -1
            if(a.name < b.name) return 1
            return 0
        },
        price: (a, b) => a.price - b.price
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_SORT":
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
};