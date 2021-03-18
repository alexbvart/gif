import React from 'react';

import Gif from '../Gif/Gif';

/* CSS */
import './index.css'

const ListOfGif = ({gif}) => {
    return (
        <>
            <section className="gif-grid">
                {gif.map(({ id, title, url }) => (
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