import React, {useEffect, useState} from 'react';

/* CONPONENTS */
import ListOfGif from '../../Components/ListOfGif';

/* CUSTON HOOKS */
import { useGif } from '../../hooks/useGifs';

/* SERVICES */
import getGif from '../../services/getGif';

const GifContainer = ({params}) => {

    const {keyword} = params;

    const {loading, gif} = useGif({keyword})

    if (loading) {
        return <i>💤</i>
    }

    return ( 
        <>
            <ListOfGif gif={gif} />
        </>
    );
}
export default GifContainer;