const INITIAL_STATE = {  
    showPerPage: 6,
    currentPage: 1,
    numberOfPages: 4,
    showFrom: 0,
    showTo: 5
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_SHOW_PER_PAGE":
            return { ...state, ...action.payload };
        case "CHANGE_CURRENT_PAGE":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};