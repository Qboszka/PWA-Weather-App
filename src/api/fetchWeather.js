import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/forecast/";
const API_KEY = "0e62279e9830ec0077ae888dceb5f8e0";

const fetchWeather = async (query) => {
    const { data } = await  axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
            
        }
        
    });
    console.log(data)
    return data;
};

export default fetchWeather