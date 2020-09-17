import React from 'react'
import "./Header.scss"
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
                <div className="container">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-handburger">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="#home-header" className="navbar-brand">Hacker Club</a>
                    <div className="collapse navbar-collapse " id="nav-handburger">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-items">
                                <a href="#home-header" className="nav-link">HOME</a>
                            </li>
                            <li className="nav-items">
                                <a href="#explore-head" className="nav-link">EXPLORE</a>
                            </li>
                            <li className="nav-items">
                                <a href="#creat-head" className="nav-link">CREATE</a>
                            </li>
                            <li className="nav-items">
                                <a href="#share-head" className="nav-link">SHARE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
