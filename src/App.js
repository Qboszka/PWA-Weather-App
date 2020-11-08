import React, { useState } from 'react';
import fetchWeather  from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('')

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');    
        }
    }
    return(
        <div className="main-container">
            <input type="text" className="search" placeholder="search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>

            {weather && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        <sup>{weather.city.country}</sup>
                    </h2>
                    <div className="city-temp">
                     {Math.round(weather.list[0].main.temp)}
                        <sup>&deg;C</sup> 
                    </div> 
                   <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} 
                            alt={weather.list[0].weather[0].description} />
                        <span>{weather.list[0].weather[0].description}</span>
                    </div>  
        
                </div>
            )}
        </div>
    );
}
export default App