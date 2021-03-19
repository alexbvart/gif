import axios from "axios";

import {API_KEY, API_URL} from './seting'

const getGif = async() => {
    
    const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
    const {data} = await axios.get(URL)
    return data.data;
    
}
export default getGif;