import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actionOptions from '../../store/actions';

import BookCard from './BookCard/BookCard'

class Books extends Component {

    state = {
        isFetching: true,
        firstMount: true,
        showInstructions: true
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.isFetching !== prevState.isFetching) {
            return {isFetching: nextProps.isFetching};
        } else {
            return null;
        }
    }

    // componentDidMount = () => {
    //     this.setState(this.state, () => {
    //         return {
    //             ...this.state,
    //             showInstructions: true
    //         }
    //     })
    // }

    onNextButtonClick = () => {
        this.setState({showInstructions: false});
        const newSearchIndex = this.props.searchIndex + 8;
        const urlToFetch = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q= `
                            + this.props.searchTerm + `&maxResults=8&startIndex=` + newSearchIndex
        this.props.navigatePage(this.props.searchTerm, false, urlToFetch, newSearchIndex);
    }

    onPreviousButtonClick = () => {
        const newSearchIndex = this.props.searchIndex - 8;
        const urlToFetch = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q= `
                            + this.props.searchTerm + `&maxResults=8&startIndex=` + newSearchIndex
        this.props.navigatePage(this.props.searchTerm, false, urlToFetch, newSearchIndex);
    }

    render() {
        return (
            <div className="books">
                <div className="books__header">
                    <h2 className="books__title">
                        Discover Books
                    </h2>
                </div>
                { !this.state.isFetching && this.props.bookList ?
                    <div>
                    <div className="books__list">
                        {this.props.bookList.map(book => {
                            if(!(book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail)) {
                                return <BookCard coverUrl="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png" title={book.volumeInfo.title} summary={book.volumeInfo.description}/>
                            }
                            return <BookCard coverUrl={book.volumeInfo.imageLinks.smallThumbnail} title={book.volumeInfo.title} summary={book.volumeInfo.description}/>
                        })}
                    </div> 
        
                    <div className="books__buttons">
                        {this.props.searchIndex > 0 ? 
                            <button onClick={this.onPreviousButtonClick} className="books__next">
                                Previous
                            </button>  : null}
                        {this.props.bookList.length > 0 ?
                            <button onClick={this.onNextButtonClick} className="books__next">
                                Next
                            </button> : null}               
                    </div> 
                    </div> : <div className="books__loading">Loading...</div> 
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        bookList: state.books,
        searchIndex: state.searchIndex,
        searchTerm: state.lastSearchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNextButton: () => dispatch({type: actionOptions.NEXT_PAGE}),
        onPreviousButton: () => dispatch({type: actionOptions.PREVIOUS_PAGE}),
        navigatePage: (searchTerm, isNewSearch, urlToFetch, searchIndex) => dispatch(actionOptions.fetchBooks(searchTerm, isNewSearch, urlToFetch, searchIndex)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);