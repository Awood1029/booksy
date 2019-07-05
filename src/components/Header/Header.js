import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';

const header = (props) => {

        return (
            <header className="header">
                <form action="#" className="search" onSubmit={props.search}>
                    <input type="text" name="searchTerm" className="search__input" placeholder="Search books"></input>
                    <button className="search__button">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
    
                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <span className="user-nav__notification-tag">2</span>
                        <i className="user-nav__notification far fa-bell"></i>
                    </div>
                    <p className="user-nav__name">
                        Kyle Lewis
                    </p>
                    <div className="user-nav__user">
                        <img src={require("../../assets/img/user.jpg")} alt="User photo" class="user-nav__user-photo"></img>
                    </div>
                </nav>
            </header>
        );
}

export default header;