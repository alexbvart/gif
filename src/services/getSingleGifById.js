import axios from "axios";

const API_KEY = 'i1iZf7HEbEIcHjrc08TDnoWffAEr97sU'

const getSingleGifById = async (GIF_ID) => {

    const API_URL = `https://api.giphy.com/v1/gifs/${GIF_ID}?api_key=${API_KEY}`;
    const { data } = await axios.get(API_URL)

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