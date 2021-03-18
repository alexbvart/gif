import React from 'react';

/* CSS */
import './index.css'

const Wrapper48 = ({children,color='#c4c4c427'}) => {

    const style = {
        backgroundColor: color
    }

    return ( 
        <>
            <div className="wrapper48" style={style}>
                {children}
            </div>
        </>
    );
}
export default Wrapper48;