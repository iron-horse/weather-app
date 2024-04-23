import WeatherIcon from "../components/weather-icon";
import Temp from "../components/temp";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DailyHighlights({weather}) {
    const today = new Date().getDay();
    const day = new Date(weather.dt * 1000).getDay();
    
    return (
        <div className="my-2 bg-orange-300 w-full flex justify-start pl-4 items-center">
            <div className="w-1/3">{day === today ? "Today" : days[day]}</div>
            <div className="w-1/3"><WeatherIcon weather={weather.weather}/></div>
            <div><Temp temp={weather.temp.min}/> - <Temp temp={weather.temp.max}/></div>
        </div>
    );
  }
  
  export default DailyHighlights;
  