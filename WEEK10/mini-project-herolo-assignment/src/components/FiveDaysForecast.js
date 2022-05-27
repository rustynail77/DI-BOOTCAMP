import {useContext, useState, useEffect} from 'react';
import { fetchFiveDaysForecast } from "../data/fetchInfo";
import {AppContext} from '../App';

const getWeekDay = (date)=> {
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const d = new Date(date);
    return weekdays[d.getDay()];
}

const FiveDaysForecast = (props) => {
    const [currFive, setCurrFive] = useState([])
    const {srchCity} = useContext(AppContext);
    
    useEffect(()=>{
        const func = async () => {
            console.log('entered useEffect in FiveDays');
            const fiveDays = await fetchFiveDaysForecast(true, srchCity);
            const data = await fiveDays.json();
            console.log('fiveDaysData =',fiveDays,data);
            setCurrFive(data);
        }
        func();
    },[srchCity])
    
    console.log('currFive, srchCity =', currFive, srchCity);

    return (
        <div className="fiveDaysContainer">
        {
            currFive.DailyForecasts? currFive.DailyForecasts.map((day,i)=>{    
                return(
                    <div className="fiveDayCard" key={i}>
                        <h3>{getWeekDay(day.Date)}</h3>
                        <div>   {day.Temperature.Maximum.Value}°
                                {day.Temperature.Maximum.Unit} /<br/>
                                {day.Temperature.Minimum.Value}°
                                {day.Temperature.Minimum.Unit}
                        </div>
                        <img className="weathIconFiveDays" alt="icon" src={`https://www.accuweather.com/images/weathericons/${day.Day.Icon}.svg`} />
                        <h3>{day.Day.IconPhrase}</h3>
                    </div>
                )

            })
            : null
        }
        </div>
    )
}
export default FiveDaysForecast;