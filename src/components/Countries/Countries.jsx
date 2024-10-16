import React, {useState, useEffect} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <>
            <h1>Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map((country) => (
                        <Country key={country.cca3} country={country}/>
                    ))
                }
            </div>
        </>
    )
        ;
};

export default Countries;