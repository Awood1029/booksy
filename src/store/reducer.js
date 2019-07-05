import * as actionTypes from './actions';

const initialState = {
    isFetching: false,
    books: [],
    lastSearchTerm: "",
    searchIndex: 0,
    favoriteBooks: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_BOOKS:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.RECEIVE_BOOKS:
            let index;

            if(action.isNewSearch) {
                index = 0;
            } else (
                index = action.searchIndex
            )
            return {
                ...state,
                isFetching: false,
                books: action.books,
                lastSearchTerm: action.searchTerm,
                searchIndex: index
            }
        case actionTypes.NEXT_PAGE:
            return {
                ...state,
                searchIndex: state.searchIndex + 0
            }
        case actionTypes.PREVIOUS_PAGE:
            return {
                ...state,
                searchIndex: state.searchIndex - 8
            }
        case actionTypes.RESET_INDEX:
            return {
                ...state,
                searchIndex: 0
            }
        case actionTypes.INITIALIZE_FAVORITES:
            return {
                ...state,
                favoriteBooks: action.value
            }
        case actionTypes.ADD_FAVORITE:
            const book = {
                title: action.title,
                summary: action.summary,
                coverUrl: action.coverUrl,
            }
            return {
                ...state,
                favoriteBooks: state.favoriteBooks.concat(book)
            }
    }
    return state;
}

export default reducer;