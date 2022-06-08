import {useContext} from 'react';
import {AppContext} from '../App';
import rARoutes from '../data/routes.json';

const Autocomplete = (props) => {
    const { depCity, setDepCity, 
            arrCity, setArrCity, 
            potentialAirports, setPotentialAirports, 
            potentialDestinations, setPotentialDestinations} = useContext(AppContext);
    const avRoutes = [...rARoutes];

    const routeExists = (city) => {
        let potDest = avRoutes.filter(route=>route.airportFrom==city.iata);
        if (potDest.length > 0) {
            
        }        
    }

    const handleOnClick = (city) => {
        routeExists(city);
        setDepCity(city);
        document.querySelector('#fromAirport').value=city.name;
        setPotentialAirports([]);
    }
   
    return (
        <div>
            <ul className="autocomplete">
            {
                potentialAirports.map((city,i)=>{ 
                    return (
                        <li key={i} onClick={()=>handleOnClick(city)}>{city.name}</li>
                    )
                })
            }
            </ul>
        </div>
    )

}

export default Autocomplete;