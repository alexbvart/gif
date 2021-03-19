import React from 'react';
import { Link } from 'wouter';


/* CSS */
import './index.css'

/* ASSETS */
import logo from "static/gif.svg";
import avatar from "static/avatar.png";

/* COMPONENTS */
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';
import TrendingSearches from 'MicroComponents/TrendingSearches/TrendingSearches';


const Header = () => {

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

                <TrendingSearches></TrendingSearches>

            </header>

            <footer className="header-footer"> </footer>
        </>
    );
}
export default Header;