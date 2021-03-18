import { useEffect, useState } from "react";

/* SERVICES */
import getGif from "../services/getGif";


export function useGif({keyword}={keyword:null}) {
    const [gif, setGif] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const  KEYWORD_DEFAULT_USE =  keyword || localStorage.getItem('lastKeyword') || 'random'

        getGif({ keyword: KEYWORD_DEFAULT_USE})
        .then(gifs => {
                localStorage.setItem('lastKeyword', keyword)
                setGif(gifs)
                setLoading(false)
            });
    }, [keyword])

    return {loading,gif}
}
