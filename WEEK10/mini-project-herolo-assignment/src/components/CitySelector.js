import {useContext} from 'react';
import {AppContext} from '../App';

const CitySelector = (props) => {
    const { srchCity,setSrchCity,
            cityList,setCityList,
            cityName,setCityName
            } = useContext(AppContext);

    const handleClick = (value) => {
        document.getElementById("cityInput").value = value.LocalizedName;
        setSrchCity(value.Key);
        setCityName(value.LocalizedName);
        setCityList([]);
    }

    return (
        <>
            {
            props.cityOptions.map((item,i)=>{
                return (
                        <div onClick={()=>handleClick(item)} key={i}>
                            {item.LocalizedName}
                        </div>
                )
            })
            }
        </>
    )
}
export default CitySelector;