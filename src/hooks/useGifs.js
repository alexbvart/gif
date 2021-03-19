import { useContext, useEffect, useState } from "react";
import GifContext from "context/GifContext";

/* SERVICES */
import getGif from "services/getGif";


export function useGif({keyword}={keyword:null}) {
    /* const [gif, setGif] = useState([]) */
    const {gifs,setGifs} = useContext(GifContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const  KEYWORD_DEFAULT_USE =  keyword || localStorage.getItem('lastKeyword') || 'random'

        getGif({ keyword: KEYWORD_DEFAULT_USE})
        .then(gifs => {
                localStorage.setItem('lastKeyword', keyword)
                setGifs(gifs)
                setLoading(false)
            });
    }, [keyword])
    /* }, [keyword,setGifs]) */

    return {loading,gifs}
}
