import React, {useEffect, useState} from 'react';

/* CONPONENTS */
import ListOfGif from 'Components/ListOfGif';

/* CUSTON HOOKS */
import { useGif } from 'hooks/useGifs';


const GifContainer = ({params}) => {

    const {keyword} = params;

    const {loading, gifs} = useGif({keyword})

    if (loading) {
        return <i>💤</i>
    }

    return ( 
        <>  
            <h2>{decodeURI(keyword)} </h2>
            <ListOfGif gifs={gifs} />
        </>
    );
}
export default GifContainer;