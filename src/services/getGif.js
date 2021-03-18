import axios from "axios";

const API_KEY = 'i1iZf7HEbEIcHjrc08TDnoWffAEr97sU'
const GIFS = 22

const getGif = async({keyword='gatos'}={}) => {
    
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${API_KEY}&offset=0&rating=g&lang=es`;
    const {data} = await axios.get(API_URL)
    
    const gifs = data.data.map(oneGif => {
        const {images, title, id} = oneGif
        const {url} =  images.downsized_medium
        console.log({title,id,url});
        return {title,id,url}
    })
    return gifs;
    

}
export default getGif;