import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import getTrendingTermsGif from '../../services/getTrendingTermsGif'

/* COMPONENTS */
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';
import SearchBar from 'MicroComponents/SearchBar/SearchBar';

/* CSS */
import './index.css'


export const TrendingSearches = () => {

    const [trends, setTrends] = useState([])
    console.log('listo ', { trends });

    useEffect(() => {
        const getTrendsHere = async () => {
            setTrends(await getTrendingTermsGif())
        }
        getTrendsHere()
    }, [])

    return (
        <>
            <ul className="header__tag">
                <div className="header__tag--carrousel">
                    {
                        trends.map((trend) => (
                            <li>
                                <Wrapper48>
                                    <Link href={`/search/${trend}`} className="tag tag--trends">{`${trend}`}</Link>
                                </Wrapper48>
                            </li>
                        ))
                    }
                </div>
                <li className="searchBar">
                    <SearchBar></SearchBar>
                </li>
            </ul>
        </>
    );
}



export default function LazyTrendingTermsGif() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const onchange = (entries) => {
            const element = entries[0]
            console.log(element);
            if (element.isIntersecting) {
                setShow(true)
            }
        }

        const observer = new IntersectionObserver(onchange,{
            rootMargin:'100px'
        })

        observer.observe(document.getElementById('LazyTrending'))

    }, [])

    return <div id="LazyTrending">
        {show ? <TrendingSearches></TrendingSearches> : null}
    </div>
}