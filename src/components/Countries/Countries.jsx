import React, {useState, useEffect} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const setVisitedHandeler = (country) => {
        setVisitedCountries(value => {
            const updateCountries = [...value, country];
            // console.log(updateCountries);
            return updateCountries;
        });
        // console.log(visitedCountries);
    }
    // console.log(country);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <>
            <div>
                <h1>Visited Country</h1>
                <ul>
                    {
                        visitedCountries.map((name) => {
                            return <li key={name}>{name.common}</li>;
                        })
                    }
                </ul>
            </div>
            <h1>Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map((country) => (
                        <Country key={country.cca3} country={country} setVisitedHandeler={setVisitedHandeler}/>
                    ))
                }
            </div>
        </>
    )
        ;
};

export default Countries;