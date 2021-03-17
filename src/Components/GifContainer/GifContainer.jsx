import React, {useEffect, useState} from 'react';
import getGif from '../../services/getGif';
import Gif from '../Gif/Gif';

/* CSS */
import './index.css'


const GifContainer = ({params}) => {

    const {keyword} = params;
    const [gif, setGif] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        getGif({keyword})
        .then(gifs => {
            setGif(gifs)
            setLoading(false)
        });
    }, [keyword])

    if (loading) {
        return <i>💤</i>
    }

    return ( 
        <>
            <section className="gif-grid">
                {gif.map(({id, title, url})=>(
                    <Gif 
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                    />
                ))}
            </section>
        </>
    );
}
export default GifContainer;