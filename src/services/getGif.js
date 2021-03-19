import axios from "axios";
import {API_KEY,API_URL,GIFS} from './seting'

const getGif = async({keyword='gatos',limit=GIFS,page=0}={}) => {
    
    const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*page}&rating=g&lang=es`;
    const {data} = await axios.get(URL)
    
    const gifs = data.data.map(oneGif => {
        const {images, title, id} = oneGif
        const {url} =  images.downsized_medium
        console.log({title,id,url});
        return {title,id,url}
    })
    return gifs;
    
}
export default getGif;


/* offset = gif a ignorar */