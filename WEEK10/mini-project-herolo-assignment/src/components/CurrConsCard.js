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
            // console.log('props.favCity =', props.favCity);
            const id = props.favCity.id==null ? srchCity : props.favCity.id;
            // console.log('props.cityId =',props.favCity, id, srchCity);
            const currCons = await fetchCurrentConditions(id);
            // console.log('srchCity,currCons =',srchCity, currCons);
            const data = await currCons.json();
            // console.log(data);
            setCurrent(data);
        }
        func();
    },[srchCity])

    const handleOnClick = (favCity) => {
        console.log('favCity =',favCity);
        setSrchCity(favCity.id);
        setCityName(favCity.name);
        navigate("/");
    }

    return (
        <div key={props.key} id='sm-city-data'>
            {
               
               current ? current.map((item,i)=>{
                    // console.log('item=',item);
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