import React, {useEffect, useState} from 'react';

/* CONPONENTS */
import ListOfGif from 'Components/ListOfGif';
import LoaderGrid from 'Components/LoaderGrid/LoaderGrid';

/* CUSTON HOOKS */
import { useGif } from 'hooks/useGifs';


const GifContainer = ({params}) => {

    const {keyword} = params;

    const {loading, gifs, setPage} = useGif({keyword})

    const handleNextPage = () =>{
        setPage(prevPage => prevPage + 1)
    }

    if (loading) {
        return <LoaderGrid></LoaderGrid>
    }

    return ( 
        <>  
            <h2>{decodeURI(keyword)} </h2>
            <ListOfGif gifs={gifs} />
            <br />
            <br />
            <button onClick={handleNextPage}> Get Next Page</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
export default GifContainer;