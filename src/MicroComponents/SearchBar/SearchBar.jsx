import React, { useState } from 'react';
import { useLocation } from 'wouter';

/* COMPONENTS */
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';

/* ASSETS */
import search from "static/search-fill.svg";

/* CSS */
import './index.css'

const SearchBar = () => {

    const [path,pushLocation] = useLocation()
    const [keyword, setKeyword] = useState('')

    /* Funciunes para manejar el input y realizar la busqueda  {kewyword} */
    const handleSubmit = 
        (event) => {
            event.preventDefault()
            pushLocation(`/search/${keyword}`)
        }
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <>
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
        </>
    );
}
export default React.memo(SearchBar);