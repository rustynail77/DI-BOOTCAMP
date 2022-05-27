import InnerBar from './InnerBar';
import FiveDaysForecast from './FiveDaysForecast';
import CitySelector from './CitySelector';
import {useContext} from 'react';
import {AppContext} from '../App';
import {fetchAutoCompleteApi} from '../data/fetchInfo';

const Home = (props) => {
    const {setCityList, cityList} = useContext(AppContext);

    const handleChange = async (e) => {
        if (e.target.value!='') {  // maybe have a timeout before fetching
            console.log(e.target.value);
            const cityOptions = await fetchAutoCompleteApi(e.target.value);
            let data = await cityOptions.json();
            console.log('cityOptions =',data);
            setCityList(data);
        } else {setCityList([])} 
    }
  
    return (
        <div id='main-container'>
            <div className="search-bar">
                <input id="cityInput" 
                    onChange={(e)=>handleChange(e)}
                    autoComplete="off" 
                    placeholder="Search for city" 
                    />  
                <div id="citySelector">
                    <CitySelector cityOptions={cityList} />
                </div>
            </div>
            <InnerBar /> 
            <FiveDaysForecast />           
        </div>
    )
}


export default Home;