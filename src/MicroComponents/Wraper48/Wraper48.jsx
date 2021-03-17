import React from 'react';

/* CSS */
import './index.css'

const Wraper48 = ({children,color='#c4c4c427'}) => {

    const style = {
        backgroundColor: color
    }

    return ( 
        <>
            <div className="wraper48" style={style}>
                {children}
            </div>
        </>
    );
}
export default Wraper48;