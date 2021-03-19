import axios from "axios";
import {API_URL,API_KEY} from './seting'


const getSingleGifById = async (GIF_ID) => {

    const URL = `${API_URL}/gifs/${GIF_ID}?api_key=${API_KEY}`;
    const { data } = await axios.get(URL)

    const { images, title, id } = data.data
    const { url } = images.downsized_medium

    const gif = {
        "id": id,
        "title": title,
        "url": url
    }
    console.log({gif});
    return gif;

}
export default getSingleGifById;