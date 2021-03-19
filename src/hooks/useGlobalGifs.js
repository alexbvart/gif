import { useContext } from 'react';
import GifContext from '../context/GifContext';

/* CustonHooks que lo unico que hace es devolvernos los gifs */

export default function useGlobalGifs() {

    return useContext(GifContext).gifs
    /* const { gifs } = useContext(GifContext)
    return gifs */
}
