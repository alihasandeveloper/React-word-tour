import React, {useState} from 'react';
import './Country.css'
const Country = ({country, setVisitedHandeler}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited , setVisited] = useState(false);
    // console.log(setVisitedHandeler  );
    const handeler = () => {
        setVisited(!visited);
    }
    // console.log(country);
    return (
        <>

            <div className={`country ${visited && 'visited'}`}>
                <h2>{name?.common}</h2>
                <img src={flags.png} alt={flags.alt} />
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Code: {cca3}</p>
                <button onClick={() =>setVisitedHandeler(country.name)}> Mark Visited</button>
                <button onClick={handeler}> {visited ? 'Visited' : 'Going'}</button>
                <p>{visited ? 'I visit on the country' : 'I want to visit on this country'}</p>
            </div>
        </>
    );
};

export default Country;