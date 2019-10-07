import products from '../apis/products';

export const fetchProducts = () => async dispatch => {
    const response = await products.get('/products');
    
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data} );
}

export const changePrice = (id, checked) => {
    return {
        type: "CHANGE_PRICE",
        payload: {id, checked}
    }
}

export const sortBy = (sortBy) => {
    return {
        type: "CHANGE_SORT",
        payload: sortBy
    }
}

export const changeShowPerPage = (showPerPage) => (dispatch, getState) => {

    if(!showPerPage) showPerPage = getState().page.showPerPage; 
    let { currentPage } = getState().page;
    const numberOfProducts = getState().numberProducts;

    const numberOfPages = Math.ceil(numberOfProducts/showPerPage);
    if(Math.ceil(numberOfProducts / showPerPage) < currentPage) currentPage = Math.ceil(numberOfProducts / showPerPage)

    const showFrom = (currentPage - 1) * showPerPage;
    let showTo = showFrom + showPerPage - 1;
    if(showTo > numberOfProducts - 1) showTo = numberOfProducts - 1;

    const page = { 
        showPerPage: +showPerPage,
        numberOfPages: numberOfPages,
        showFrom,
        showTo,
        currentPage
    }

    dispatch({ type: 'CHANGE_SHOW_PER_PAGE', payload: page })
}

export const changeNumberOfProduct = (number) => {
    return {
        type: "CHANGE_NUMBER_OF_PRODUCTS",
        payload: number
    }
}

export const changeCurrentPage = (number) => (dispatch, getState) => {
        
    const { showPerPage } = getState().page;
    const numberOfProducts = getState().numberProducts;

    const showFrom = (number - 1) * showPerPage;
    let showTo = showFrom + showPerPage - 1;
    if(showTo > numberOfProducts - 1) showTo = numberOfProducts - 1;

    dispatch({ type: 'CHANGE_CURRENT_PAGE', payload: {currentPage: number, showFrom, showTo }})
}

export const fetchBasket = () => {    
    let value = JSON.parse(localStorage.getItem('basket'))
    if(!value) value =[];
    return {type: "FETCH_BASKET", payload: value}
}

export const signIn = (user) => {
    return { type: 'SIGN_IN', payload: user }
}

export const signOut = () => {
    return { type: 'SIGN_OUT' }
}