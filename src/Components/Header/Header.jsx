import React, { useState } from 'react';
import { Link } from 'wouter';


/* CSS */
import './index.css'

/* ASSETS */
import logo from "../../static/gif.svg";
import avatar from "../../static/avatar.png";

/* COMPONENTS */
import Wraper48 from '../../MicroComponents/Wraper48/Wraper48';


const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__icon">
                    <Wraper48>
                        <img src={logo} alt="logo" />
                    </Wraper48>
                    <Wraper48>
                        <img src={avatar} alt="logo" />
                    </Wraper48>
                </div>
                <ul className="header__tag">
                    <li>
                        <Wraper48>
                            <Link href="/gif/rick" className="tag">Popular</Link>
                        </Wraper48>
                        <Wraper48>
                            <Link href="/gif/morty" className="tag">Sport</Link>
                        </Wraper48>
                    </li>
                </ul>
            </header>
        </>
    );
}
export default Header;