import React, {useEffect, useState} from 'react';

import getGif from '../../services/getGif';

import ListOfGif from '../../Components/ListOfGif';
import { useGif } from '../../hooks/useGifs';


const Home = () => {

    const {loading, gifs} = useGif()
    console.log('encontrados',gifs);

    /* const [gif, setGif] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        getGif({keyword})
        .then(gifs => {
            setGif(gifs)
            setLoading(false)
        });
    }, [keyword]) */

    if (loading) {
        return <i>💤</i>
    }

    return ( 
        <>
            <ListOfGif gifs={gifs} />
        </>
    );
}
export default Home;