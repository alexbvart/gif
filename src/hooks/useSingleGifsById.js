import { useContext, useEffect, useState } from "react";
import GifContext from "context/GifContext";


import getSingleGifById from "services/getSingleGifById";


export function useSingleGifsById(GIF_ID) {

    const {singleGif,setSingleGif} = useContext(GifContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getSingleGifById(GIF_ID)
        .then(gif => {
                setSingleGif(gif)
                setLoading(false)
            });
    }, [GIF_ID,setSingleGif])

    return {loading,singleGif}
}
