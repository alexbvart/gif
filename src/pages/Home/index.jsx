import React from 'react';

/* HOOKS */
import { useGif } from 'hooks/useGifs';

/* COMPONENTS */
import ListOfGif from 'Components/ListOfGif';
import LoaderGrid from 'Components/LoaderGrid/LoaderGrid';


const Home = () => {

    const {loading, gifs} = useGif()
    console.log('encontrados',gifs);

    if (loading) {
        return <LoaderGrid></LoaderGrid>
    }

    return ( 
        <>
            <ListOfGif gifs={gifs} />
        </>
    );
}
export default Home;