import React from 'react';
import { Link } from 'wouter';
const Gif = ({ url, title, id }) => {

    return (
        <>
            <Link href={`/gif/${id}`} >
                <img loading='lazy' className="singleGif" src={url} key={id} alt={title} />
            </Link>
        </>
    );
}
export default Gif;