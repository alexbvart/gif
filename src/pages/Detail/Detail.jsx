import React from 'react';
import { Redirect } from 'wouter';
import { Helmet } from "react-helmet";

import { useSingleGifsById } from 'hooks/useSingleGifsById';

import Gif from 'Components/Gif/Gif';
import LoaderGrid from 'Components/LoaderGrid/LoaderGrid';



const Detail = ({ params }) => {

    const { id } = params;
    const { loading, singleGif, isError } = useSingleGifsById(id)

    const title = singleGif ? singleGif.title :'';

    if (loading) return (
        <>
            <Helmet>
                <title>Loading ... 👽</title>
            </Helmet>
            <LoaderGrid />
        </>
    )
    if (isError) return <Redirect href="/404" />
    if (!singleGif) return null

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>

            <Gif
                id={singleGif.id}
                key={singleGif.id}
                title={singleGif.title}
                url={singleGif.url}
            />
        </>
    );
}
export default Detail;