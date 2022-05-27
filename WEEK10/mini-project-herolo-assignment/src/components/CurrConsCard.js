import {useEffect, useState, useContext} from 'react';
import {fetchCurrentConditions} from '../data/fetchInfo';
import {AppContext} from '../App';
import {useNavigate} from 'react-router-dom';

const CurrConsCard = (props) => {
    const [current, setCurrent] = useState([]);
    const {srchCity, setSrchCity, setCityName} = useContext(AppContext);
    let navigate=useNavigate();

    useEffect(()=>{
        const func = async () => {
            const id = props.favCity.id==null ? srchCity : props.favCity.id;
            const currCons = await fetchCurrentConditions(id);
            const data = await currCons.json();
            setCurrent(data);
        }
        func();
    },[srchCity])

    const handleOnClick = (favCity) => {
        setSrchCity(favCity.id);
        setCityName(favCity.name);
        navigate("/");
    }

    return (
        <div key={props.key} id='sm-city-data'>
            {
               
               current ? current.map((item,i)=>{
                    return(
                    <div onClick={()=>handleOnClick(props.favCity)} key={i} className="cardClick">
                        <div className="favCards">
                        <img className="weathIconFiveDays" src={`https://www.accuweather.com/images/weathericons/${item.WeatherIcon}.svg`} alt="icon" />
                            <div>
                                <h1>{props.favCity.name}</h1>
                                <h2>{item.Temperature.Metric.Value}°{item.Temperature.Metric.Unit}</h2>
                                <h4>{item.WeatherText}</h4>
                            </div>
                        </div>
                    </div>)
                }) : null
                }
            </div>
    )
}

export default CurrConsCard;