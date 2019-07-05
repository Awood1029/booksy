export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const RESET_INDEX = 'RESET_INDEX';
export const INITIALIZE_FAVORITES = 'INITIALIZE_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';

const requestBooks = () => {
    return {
        type: REQUEST_BOOKS,
    }
}

export const fetchBooks = (searchTerm, isNewSearch, urlToFetch, searchIndex) => {
    return function(dispatch) {
        dispatch(requestBooks())

        if(searchTerm != "") {
            fetch(urlToFetch)
            .then(response => response.json(),
            error => console.log("An error occurred fetching: " + urlToFetch))
            .then(json => 
                dispatch(receiveBooks(json.items, searchTerm, isNewSearch, searchIndex)));
        }
    }
}

const receiveBooks = (books, searchTerm, isNewSearch, searchIndex) => {
    return {
        type: RECEIVE_BOOKS,
        books,
        searchTerm,
        isNewSearch,
        searchIndex
    }
}

export const resetIndex = () => {
    return {
        type: RESET_INDEX
    }
}

export const addFavorite = (title, summary, coverUrl) => {
    return {
        type: ADD_FAVORITE,
        title: title,
        summary: summary,
        coverUrl: coverUrl
    }
} 

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    }
}

export const previousPage = () => {
    return {
        type: PREVIOUS_PAGE
    }
}

export const initializeFavorites = (books) => {
    return {
        type: INITIALIZE_FAVORITES,
        value: books
    }
}
