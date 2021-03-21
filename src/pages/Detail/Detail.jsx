import React from 'react';
import Gif from 'Components/Gif/Gif';

import {useSingleGifsById}  from 'hooks/useSingleGifsById';

import LoaderGrid from 'Components/LoaderGrid/LoaderGrid';

const Detail = ({ params }) => {
    const {id} = params;

    /* const gifs = useGlobalGifs() */
    const {loading, singleGif} = useSingleGifsById(id)
/* 
    console.log('se borraron?',gifs);

    if (gifs) {
        const gif = gifs.find(singlegif => singlegif.id === params.id)
        console.log('no hay gif en el context');
    }else{
        console.log('hacer una peticion');
        const gif = singleGif
    } */
    console.log('match', singleGif);

    if (loading) {
        return <LoaderGrid></LoaderGrid>

    }
    return (
        <>
            <Gif
                id={singleGif.id}
                key={singleGif.id}
                title={singleGif.title}
                url={singleGif.url}
            />
        </>
    );
}
export default Detail;