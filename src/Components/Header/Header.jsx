import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';


/* CSS */
import './index.css'

/* ASSETS */
import logo from "../../static/gif.svg";
import search from "../../static/search-fill.svg";
import avatar from "../../static/avatar.png";

/* COMPONENTS */
import Wrapper48 from '../../MicroComponents/Wrapper48/Wrapper48';


const Header = () => {

    const [keyword, setKeyword] = useState('')
    /* const [screenWidth, setScreenWidth] = useState(window.screen.width) */
    const [path, pushLocation] = useLocation()

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <header className="header">

                <div className="header__icon">
                    <Wrapper48>
                        <Link href="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </Wrapper48>

                    <Wrapper48>
                        <img src={avatar} alt="logo" />
                    </Wrapper48>
                </div>

                <ul className="header__tag">
                    <li>
                        <Wrapper48>
                            <Link href="/search/rick" className="tag">Popular</Link>
                        </Wrapper48>
                    </li>
                    <li>
                        <Wrapper48>
                            <Link href="/search/morty" className="tag">Sport</Link>
                        </Wrapper48>
                    </li>
                    <li className="searchBar">
                        <Wrapper48 className="searchBar__wrapper">
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} type="search" value={keyword} />
                                <button>
                                    <Wrapper48 >
                                        <img src={search} alt="logo" />
                                    </Wrapper48>
                                </button>
                            </form>

                        </Wrapper48>
                    </li>
                </ul>
            </header>

            <footer className="header-footer"> </footer>
        </>
    );
}
export default Header;