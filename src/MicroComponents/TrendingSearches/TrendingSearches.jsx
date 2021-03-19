import React, { useEffect, useRef, useState } from 'react';
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
                            <li key={trend}>
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
    
    const LazyTrending = useRef()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onchange = (entries,observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(onchange,{
            rootMargin:'100px'
        })

        observer.observe(LazyTrending.current)

        return ()=> observer.disconnect();
    })

    return <div ref={LazyTrending}>
        {show ? <TrendingSearches></TrendingSearches> : null}
    </div>
}