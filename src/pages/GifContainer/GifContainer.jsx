import React, { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

/* CONPONENTS */
import ListOfGif from 'Components/ListOfGif';
import LoaderGrid from 'Components/LoaderGrid/LoaderGrid';

/* CUSTON HOOKS */
import { useGif } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';



const GifContainer = ({ params }) => {

    const { keyword } = params;

    const { loading, gifs, setPage } = useGif({ keyword })

    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const debounceHandlerNextPage = useCallback(debounce(
            () => setPage(prevPage => prevPage + 1),500
    ),[setPage] )


    useEffect(() => {

        if (isNearScreen) {
            debounceHandlerNextPage()
        }
    }, [debounceHandlerNextPage,isNearScreen])

    return (
        <>
            {
                loading
                    ? <LoaderGrid></LoaderGrid>
                    : <>
                        <h2>{decodeURI(keyword)} </h2>
                        <ListOfGif gifs={gifs} />
                        <div id="visor" ref={externalRef} ></div>
                    </>
            }

        </>
    );
}
export default GifContainer;