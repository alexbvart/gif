import Flickity from "react-flickity-component";


import React from 'react';
import './index.css'

/* const flickityOptions = {
    initialIndex: 2,
    wrapAround: true
} */

const FlickityWrapper = ({ children }) => {
    return (
        <>
            <Flickity
            >
                {children}
            </Flickity>
        </>
    );
}
export default FlickityWrapper;