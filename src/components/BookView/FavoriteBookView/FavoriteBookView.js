import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actionOptions from '../../../store/actions';

import BookCard from '../BookCard/BookCard'

class Books extends Component {

    state = {
        showPreviousButton: false,
        currentPage: 0,
        currentStartIndex: 0
    }

    componentDidMount = async () => {
        const bookResults = await fetch(`https://localhost:44388/api/books`)
            .then(response => response.json()); 
        
        this.props.onInitializeFavorites(bookResults);
    }

    onNextButtonClick = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1,
            currentStartIndex: this.state.currentStartIndex + 8
        })
    }

    onPreviousButtonClick = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage - 1,
            currentStartIndex: this.state.currentStartIndex - 8
        })
    }

    render() {
        return (
            <div className="books">
                <div className="books__header">
                    <h2 className="books__title">
                        Favorite Books
                    </h2>
                </div>
                { this.props.bookList.length ?
                
                    <div className="books__list">
                        {this.props.bookList.slice(this.state.currentStartIndex, (this.state.currentStartIndex + 8)).map(book => {
                            return <BookCard coverUrl={book.coverUrl} title={book.title} summary={book.summary}/>
                        })}
                    </div> : <p className="books__list--none">You don't have any favorite books yet</p>
                }
    
                <div className="books__buttons">
                    {this.state.currentStartIndex > 7 ? 
                        <button onClick={this.onPreviousButtonClick} className="books__next">
                            Previous
                        </button>  : null}
                    {this.props.bookList.length > 0 && this.props.bookList.length > (this.state.currentStartIndex + 8) ?
                        <button onClick={this.onNextButtonClick} className="books__next">
                            Next
                        </button> : null}               
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        bookList: state.favoriteBooks,
        searchIndex: state.searchIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNextButton: () => dispatch(actionOptions.nextPage()),
        onPreviousButton: () => dispatch(actionOptions.previousPage()),
        onInitializeFavorites: (books) => dispatch(actionOptions.initializeFavorites(books))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);