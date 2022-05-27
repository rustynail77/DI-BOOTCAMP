import {AppContext} from '../App';
import {useContext, useEffect, useState} from 'react';
import { fetchCurrentConditions } from '../data/fetchInfo';
import CurrConsCard from './CurrConsCard';

const Favorites = (props) => {
    const [cityCurrCons, setCityCurrCons] = useState([]);
    const {favCities} = useContext(AppContext);
    const [currCity, setCurrCity] = useState([]);

    useEffect(()=>{
        const func = async () => {
            const currCons = await fetchCurrentConditions(currCity);
            const data = await currCons.json();
            console.log('currCons data =',data);
            setCityCurrCons(data);
        }
        func();
    },[])
    
    return (
        <div id="main-container">
            <h2>Favorite cities</h2>
            <div className="innerContainer">
            {
                cityCurrCons ? 
                favCities.map((city,i)=>{
                    // // let cityCurrCons = fetchCurrentConditions(city.id)[0];
                    // setCurrCity(city.id);
                    // console.log('fav citycurrcons =',cityCurrCons);
                    // return (
                    //     <div className="favCards" key={i}>
                    //         <h3>{city.name}</h3>
                    //         <div>{cityCurrCons.WeatherText}</div>
                    //         <div>{cityCurrCons.Temperature.Metric.Value}°{cityCurrCons.Temperature.Metric.Unit}</div>
                    //     </div>
                    // )
                    return (
                        <CurrConsCard favCity={city} key={i}/>
                    )
                }) 
                : null
            }
            </div>
        </div>
    )
}

export default Favorites;