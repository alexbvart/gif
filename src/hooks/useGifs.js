import { useContext, useEffect, useState } from "react";
import GifContext from "context/GifContext";

/* SERVICES */
import getGif from "services/getGif";

const INITIAL_PAGE  = 0

export function useGif({keyword}={keyword:null}) {
    const {gifs,setGifs} = useContext(GifContext)

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    
    const [page, setPage] = useState(INITIAL_PAGE)
    console.log(page);

    const  KEYWORD_DEFAULT_USE =  keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)

        getGif({ keyword: KEYWORD_DEFAULT_USE})
        .then(gifs => {
                localStorage.setItem('lastKeyword', keyword)
                setGifs(gifs)
                setLoading(false)
            });
    }, [keyword,KEYWORD_DEFAULT_USE,setGifs])



    useEffect(() => {
        if (page===INITIAL_PAGE ) return
        setLoadingNextPage(true)

        getGif({ keyword: KEYWORD_DEFAULT_USE, page})
        .then(nextGifs=>{
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
            
        
        /* return () => {
            
        } */
    }, [page,KEYWORD_DEFAULT_USE,setGifs])


    return {loading,loadingNextPage,gifs,setPage}
}
