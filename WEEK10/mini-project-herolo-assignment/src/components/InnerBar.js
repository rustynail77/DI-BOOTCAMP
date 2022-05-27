import {useEffect, useState, useContext} from 'react';
import {fetchCurrentConditions} from '../data/fetchInfo';
import {AppContext} from '../App';

const InnerBar = (props) => {
    const [current, setCurrent] = useState([]);
    const {cityName, srchCity, favCities, setFavCities} = useContext(AppContext);

    const handleClick = () => {
        let arr=[...favCities];
        favCities.filter(city=>city.name===cityName).length>0 ? 
            arr.splice(arr.indexOf(cityName), 1) : 
            (favCities.length>4) ? 
                alert("You cannot add more than 5 cities to favorites") :
                arr.push({id:srchCity,name:cityName});
        setFavCities(arr);
    }
    useEffect(()=>{
        const func = async () => {
            const id = srchCity;
            const currCons = await fetchCurrentConditions(id);
            const data = await currCons.json();
            setCurrent(data);
        }
        func();
    },[srchCity])

    return (
        <div id='sm-city-data'>
            {
               current ? current.map((item,i)=>{
                    return(
                    <div key={i}>
                        <div className="innerContainer">
                        <img className="weathIcon" src={`https://www.accuweather.com/images/weathericons/${item.WeatherIcon}.svg`} alt="icon" />
                            <div>
                                <h1>{cityName}</h1>
                                <h3>{item.Temperature.Metric.Value}°{item.Temperature.Metric.Unit}</h3>
                            </div>
                            <button className="fav-btn"
                                    onClick={handleClick}>
                                        {
                                            (favCities.filter(city=>city.name===cityName).length>0?'Remove from':'Add to')
                                        } Favorites
                            </button>
                        </div>
                    <h2>{item.WeatherText}</h2>
                    </div>)
                }) : null
                }
            </div>
    )
}

export default InnerBar;