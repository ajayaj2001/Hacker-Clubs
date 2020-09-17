import React from 'react'
import "./Header.scss"
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div class="container">
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-handburger">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a href="#home-header" class="navbar-brand">Hacker Club</a>
                    <div class="collapse navbar-collapse " id="nav-handburger">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-items">
                                <a href="home-header" class="nav-link">HOME</a>
                            </li>
                            <li class="nav-items">
                                <a href="#explore-head" class="nav-link">EXPLORE</a>
                            </li>
                            <li class="nav-items">
                                <a href="#creat-head" class="nav-link">CREATE</a>
                            </li>
                            <li class="nav-items">
                                <a href="#share-head" class="nav-link">SHARE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
