import React, { useEffect, useState } from 'react';
import Details from "./sections/details"
import DailyHighlights from "./sections/daily-highlights";
import WeatherIcon from "./components/weather-icon";
import { FahrenheitContext } from './context';
import { openWeatherAPIKey } from "./secrete";

function App() {
  const [weather, setWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState({});
  const [city, setCity] = useState("Calgary, CA");
  const [resultedCity, setResultedCity] = useState(city);
  const [useFahrenheit, setUseFahrenheit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (weather?.city) {
      const lat = weather.city.coord.lat;
      const lon = weather.city.coord.lon;
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${openWeatherAPIKey}
      `).then(res => res.json()).then(data => {
        data.daily.pop(); // remove unecessory data
        setDailyWeather(data);
        setIsLoading(false);
      });
    }
  }, [weather]);

  // eslint-disable-next-line 
  const getWeather = () => {
    setIsLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly&units=metric&appid=${openWeatherAPIKey}
    `).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Invalid City! Please CityName, CountryCode. For Exmaple: Calgary, CA");
    }).then(data => {
      setResultedCity(city);
      setWeather(data);
      setCity("");
    }).catch(e => {
      setCity("");
      alert(e.message);
      setIsLoading(false);
    });
  };
  
  useEffect(() => {
    // We can get the coordinates from the browser and use users current location.
    getWeather();
  }, [getWeather]);

  return (
    <FahrenheitContext.Provider value={useFahrenheit}>
      <div className="bg-orange-50 flex flex-wrap h-screen justify-center">
        <div className="w-full p-2 md:w-1/2 lg:w-1/3 md:h-screen lg:my-auto">
          <div className={`bg-orange-200 px-8 pt-16 pb-16 w-full md:h-screen  ${isLoading ? 'blur-sm' : ''}`}>
            <div className='flex flex-row-reverse'>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" name="toggleUseFahrenheit" value={useFahrenheit} className="sr-only peer" onChange={() => setUseFahrenheit(!useFahrenheit)} />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
                <span className="ms-3 text-sm font-medium">Use Fahrenheit</span>
              </label>
            </div>
            <div className='p-4'>
              <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Enter City, CountryCode" onChange={e => setCity(e.target.value)} value={city} />
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={getWeather}>Search</button>
            </div>
            <div className='p-4'>
              <h1 className="title-font sm:text-2xl text-xl mb-3">{resultedCity}</h1>
              {
                weather?.list &&
                  (
                  <div>
                    <WeatherIcon weather={weather?.list[0].weather} size={"2x"} />
                    <h3>{weather?.list[0].weather[0].description.toUpperCase()}</h3>
                  </div>
                  )
              }
            </div>
            <Details weather={weather?.list && weather?.list[0]} />
          </div>
        </div>
        <div className="w-full p-2 md:w-1/2 lg:w-1/3 md:h-screen lg:my-auto">
          <div className={`bg-orange-200 px-8 pt-16 pb-16 w-full md:h-screen ${isLoading ? 'blur-sm' : ''}`}>
            <h1 className="title-font sm:text-2xl text-xl mb-3">7 Days Forecast</h1>
            <div className={`flex w-full flex-wrap`}>
              {
                dailyWeather?.daily && dailyWeather?.daily.map((dailyWeather) => {
                  return (
                    <DailyHighlights weather={dailyWeather} key={dailyWeather.dt} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </FahrenheitContext.Provider>
  );
}

export default App;
