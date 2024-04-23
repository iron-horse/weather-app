import Temp from "../components/temp";
import WindArrow from "../components/wind-arrow";

function Details({weather}) {
  
  return (
    <div className='flex w-full flex-wrap text-center'>
      <div className="bg-orange-300 p-4 m-2 flex-auto text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <div><div className="font-semibold">Temp: </div><span className="text-2xl"><Temp temp={weather?.main?.temp}/></span></div>
      </div>
      <div className="bg-orange-300 p-4 m-2 flex-auto text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <div className="mb-3"><div className="font-semibold">Visibility: </div> <span className="text-2xl">{weather?.visibility / 1000 }</span> km</div>
      </div>
      <div className="bg-orange-300 p-4 m-2 flex-auto text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <div className="mb-3"><div className="font-semibold">Humidity:</div> <span className="text-2xl">{weather?.main?.humidity}%</span></div>
      </div>
      <div className="bg-orange-300 p-4 m-2 flex-auto text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <div className="mb-3 flex items-center"><div className="font-semibold">Wind:</div><WindArrow direction={weather?.wind?.deg}/> <span className="text-2xl">{weather?.wind?.speed} m/sec </span></div>
      </div>
    </div>
  );
}

export default Details;
