import { memo } from 'react';

function WeatherIcon({weather, size}) {
    const imgName = size ? `${weather[0].icon}@${size}.png`:`${weather[0].icon}.png` 
    return (
        <img className="cursor-pointer scale-100 hover:scale-150 transition-all duration-500" src={`https://openweathermap.org/img/wn/${imgName}`} alt={weather[0].description} title={weather[0].description}/>
    );
  }
  
  export default memo(WeatherIcon);
  