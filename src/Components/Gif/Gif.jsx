import React, {useState} from 'react';
const Gif = ({url,title,id}) => {
    return ( 
        <>
            <img src={url} key={id} alt={title} />
        </>
    );
}
export default Gif;