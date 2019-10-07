const INITIAL_STATE = {
    isSignedIn: null,
    userName: null,
    userId: null,
    userEmail: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, ...action.payload};
        case 'SIGN_OUT':
            return { ...INITIAL_STATE, isSignedIn: false };
        default:
            return state;
    }
}