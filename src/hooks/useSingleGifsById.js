import { useEffect, useState } from "react";

import getSingleGifById from "services/getSingleGifById";
import { useGif }       from "hooks/useGifs";


export function useSingleGifsById(GIF_ID) {

    const {gifs} = useGif()
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    /* Si el id viene de una llamada anterior .findById(id) */
    const gifFromCache = gifs.find(singleGif=>singleGif.id===GIF_ID)
    const [singleGif, setSingleGif] = useState(gifFromCache)


    /* Sino hacer una peticion a la api */
    useEffect(() => {
        if (!gifFromCache) {
            setLoading(true)
            getSingleGifById(GIF_ID)
                .then(gif => {
                    setSingleGif(gif)
                    setLoading(false)
                }).catch(error=>{
                    setLoading(false)
                    setIsError(true)
                });
        }
    }, [GIF_ID, gifFromCache])

    return {loading,singleGif,isError}
}
