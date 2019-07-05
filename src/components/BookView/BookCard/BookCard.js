import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionOptions from '../../../store/actions';

class BookCard extends Component {

    onFavorite = async () => {
        await fetch('https://localhost:44388/api/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: this.props.title,
            summary: this.props.summary,
            coverUrl: this.props.coverUrl
        })
        })
    }

    render() {
        
        return (
            <div className="book-card">
                <div className="book-card__content">
                    <div className="book-card__picture-box">
                    <img src={this.props.coverUrl} alt="Book cover" 
                            className="book-card__picture"></img>
                    </div>
                    <div className="book-card__text">
                        <h3 className="book-card__title">
                            {this.props.title.length < 20 ? `${this.props.title}` : `${this.props.title.substring(0, 25)}...`}
                        </h3>
                        <p className="book-card__summary">
                            {this.props.summary ? this.props.summary.length < 200 ? `${this.props.summary}` 
                            : `${this.props.summary.substring(0, 200)}...` : "No Summary"}
                        </p>
                        <button className="book-card__read-more">
                            Read More
                        </button>
                        <button onClick={this.onFavorite} className="book-card__favorite">
                            Favorite
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookList: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFavorite: (title, summary, coverUrl) => dispatch(actionOptions.addFavorite(title, summary, coverUrl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);