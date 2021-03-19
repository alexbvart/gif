
import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderGrid = props => {

    return (
        <ContentLoader
            backgroundColor="#4568dc"
            foregroundColor="#b06ab3"
            speed={3}
            viewBox="0 0 100% 650" 
            width={"100%"} 
            height={650} 
            {...props}>

            <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
            <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
            <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
            <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
            <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
            <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />

        </ContentLoader>
    )
}


LoaderGrid.metadata = {
    name: 'baptiste fkt',
    github: 'baptistefkt',
    description: 'Three column LoaderGrid layout',
    filename: 'LoaderGrid',
}

export default LoaderGrid