import React, {useEffect, useState} from 'react';
import getGif from '../../services/getGif';
import Gif from '../Gif/Gif';

/* CSS */
import './index.css'


const GifContainer = ({keyword}) => {

    const [gif, setGif] = useState([])
    
    useEffect(() => {
        getGif({keyword}).then(gifs => setGif(gifs));
    }, [keyword])

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