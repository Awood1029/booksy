import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import * as actionOptions from '../../store/actions';

import BookView from '../BookView/BookView';
import FavoriteBookView from '../BookView/FavoriteBookView/FavoriteBookView';
import Header from '../Header/Header';


class Content extends Component {

    // componentDidMount = async () => {
    //     // // this.props.resetSearchIndex();
    //     // const bookResults = await fetch(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=subject:science&maxResults=8`)
    //     // .then(response => response.json())
    //     // .then(json => { 
    //     //     return json.items
    //     // }); 
        
    //     // this.props.onSearchBooks(bookResults, "&subject:science", true);
    // }

    getSearchTerm = (e) => {
        e.preventDefault();
        const searchTerm = e.target.elements.searchTerm.value;
        const urlToFetch = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q= ` + searchTerm + `&maxResults=8`
        this.props.onSearchBooks(searchTerm, true, urlToFetch);
    }

    // navigatePage = async () => {
    //     console.log(this.props.searchIndex)
    //     const bookResults = await fetch(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=`
    //                                     + this.props.lastSearchTerm + `&maxResults=8&startIndex=` + this.props.searchIndex)
    //                                         .then(response => response.json())
    //                                             .then(json => { 
    //                                                 return json.items
    //                                                 });

    //     this.props.onSearchBooks(bookResults, this.props.lastSearchTerm, false);
    // }  
    
      
    render() {
        return (
            <div className="content">
                <Header search={this.getSearchTerm}/>
                <Route path="/" exact component={() => <BookView navigatePage={this.navigatePage}/>}></Route>
                <Route path="/favorites" component={FavoriteBookView}></Route>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchIndex: state.searchIndex,
        lastSearchTerm: state.lastSearchTerm 
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onSearchBooks: (searchTerm, isNewSearch, urlToFetch) => dispatch(actionOptions.fetchBooks(searchTerm, isNewSearch, urlToFetch)),
        resetSearchIndex: () => dispatch(actionOptions.resetIndex())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);