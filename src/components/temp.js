import { useContext } from 'react';
import { FahrenheitContext } from "../context";
import { memo } from 'react';

function convToF(tempInC) {
    return ((tempInC * (9/5)) + 32);
}

function Temp({temp}) {
    const useFahrenheit = useContext(FahrenheitContext);
    const displayTemp = Math.round(useFahrenheit ? convToF(temp) : temp);
    const displayUnit = useFahrenheit ? " °F" : " °C";

    return (
        <span>{displayTemp}<span className="font-bold text-sm">{displayUnit}</span></span>
    );
  }
  
  export default memo(Temp);
  