import data from '../data/iataCodes.json';
import Autocomplete from './Autocomplete';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App';

const SearchForm = (props) => {
    const {
        depCity, setDepCity,
        arrCity, setArrCity,
        potentialAirports, setPotentialAirports,
        routes, setRoutes
        } = useContext(AppContext);

    const handleOnChange = (e) => {
        console.log(e.target.value);
        const airports = data.filter(city=>city.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setPotentialAirports(airports);
        // console.log('potAir =', potentialAirports);
    }

    return(
        <>
            <h2>Search RyanAir Flights</h2>
            <form id="myForm">
                Departure airport: <input type="text" onChange={(e)=>handleOnChange(e)} id="fromAirport" name="fromAirport" 
                                    // defaultValue="TLV" 
                                    />
                                    <Autocomplete list={potentialAirports} />
                Arrival airport: <input type="text" id="toAirport" name="toAirport" 
                                    // defaultValue="BUD" 
                                    />
                Departure date: <input type="date" id="from" name="from" placeholder="from" />
                Return date: <input type="date" id="to" name="to" placeholder="to" />
                <br />
                <input type="number" id="maxBudget" name="maxBudget" placeholder="Max Budget (Euros)" />
                <input type="number" id="tripLength" name="tripLength" placeholder="trip length (days)" />
                <button type="submit" id="myButt" name="myButt">Fetch info</button>
            </form>
        </>
    )
    
}

export default SearchForm;