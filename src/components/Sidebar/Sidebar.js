import React, {Component} from 'react'

class Sidebar extends Component {
    state = {
        
    }

    render() {
        return (
            <nav className="sidebar">
                <h2 className="sidebar__logo">Booksy</h2>
                <h4 className="sidebar__menu-title">Menu</h4>
                <ul className="sidebar-nav__menu">
                    <li className="sidebar-nav__item sidebar-nav__item--active">
                        <a href="/" className="sidebar-nav__link">
                            Discover
                        </a>
                    </li>
                    <li className="sidebar-nav__item">
                        <a href="/favorites" className="sidebar-nav__link">
                            Favorite Books
                        </a>
                    </li>
                </ul>
    
                <h4 className="sidebar__menu-title">Book Types</h4>
                <ul className="sidebar-nav__catagories">
                    <li className="sidebar-nav__item">
                        <a href="#" className="sidebar-nav__link">
                            Adventure
                        </a>
                    </li>
                    <li className="sidebar-nav__item">
                        <a href="#" className="sidebar-nav__link">
                            Fiction
                        </a>
                    </li>
                    <li className="sidebar-nav__item">
                        <a href="#" className="sidebar-nav__link">
                            Non-fiction
                        </a>
                    </li>
                    <li className="sidebar-nav__item">
                        <a href="#" className="sidebar-nav__link">
                            Mystery
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;