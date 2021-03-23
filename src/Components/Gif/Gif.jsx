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
export default  React.memo(Gif, (prevPros, nextProps)=>{
    return prevPros.id === nextProps.id
});