import React from 'react';

import Gif from 'Components/Gif/Gif';

/* CSS */
import './index.css'

const ListOfGif = ({gifs}) => {
    return (
        <>
            <section className="gif-grid">
                {gifs.map(({ id, title, url }) => (
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
export default ListOfGif;