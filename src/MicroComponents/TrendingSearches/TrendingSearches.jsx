import { Link } from 'wouter';

/* COMPONENTS */
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';
import SearchBar from 'MicroComponents/SearchBar/SearchBar';

/* CSS */
import './index.css'

/* SERVICES */
import getTrendingTermsGif from 'services/getTrendingTermsGif'

/* HOOKS */
import React, { useEffect, useState } from 'react';


function TrendingSearches () {

    const [trends, setTrends] = useState([])
    console.log('listo ', { trends });

    useEffect(() => {
        /* const getTrendsHere = async () => {
            setTrends(await getTrendingTermsGif())
        }
        getTrendsHere() */
        getTrendingTermsGif()
            .then(setTrends)
    }, [])

    return (
        <>
            <ul className="header__tag">
                <section className="header__tag--carrousel">
                    {
                        trends.map((trend) => (
                            <li key={trend}>
                                <Wrapper48>
                                    <Link href={`/search/${trend}`} className="tag tag--trends">{`${trend}`}</Link>
                                </Wrapper48>
                            </li>
                        ))
                    }
                </section>
                <li className="searchBar">
                    <SearchBar></SearchBar>
                </li>
            </ul>
        </>
    );
}


export default  React.memo(TrendingSearches)

