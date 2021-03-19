/* HOOKS */
import useNearScreen from 'hooks/useNearScreem';
import Wrapper48 from 'MicroComponents/Wrapper48/Wrapper48';
import React,{ Suspense } from 'react';
/* import TrendingSearches from './TrendingSearches'; */


/* import dinamico del componente que queremos utilizar */
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)


export default function LazyTrendingTermsGif() {

    const {isNearScreen, fromRef} = useNearScreen({distance:'500px'})


    return <div ref={fromRef}>
        <Suspense fallback={ <Wrapper48> Analyzing search trends</Wrapper48> }>
            {isNearScreen ? <TrendingSearches></TrendingSearches> : null}
        </Suspense>
    </div>
}