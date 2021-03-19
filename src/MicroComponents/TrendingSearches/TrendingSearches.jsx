import { Link } from 'wouter';


/* COMPONENTS */
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';
import SearchBar from 'MicroComponents/SearchBar/SearchBar';

/* CSS */
import './index.css'

/* SERVICES */
import getTrendingTermsGif from 'services/getTrendingTermsGif'

/* HOOKS */
import React, { useEffect, useRef, useState } from 'react';
import useNearScreen from 'hooks/useNearScreem';


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

    const {isNearScreen, fromRef} = useNearScreen({distance:'500px'})


    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches></TrendingSearches> : null}
    </div>
}