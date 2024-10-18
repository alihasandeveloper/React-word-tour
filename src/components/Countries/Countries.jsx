import React, {useEffect, useState} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const flagsHandeler = (flags) => {
        // console.log(flags);
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
        // console.log(flags);
    }
    // console.log(visitedFlags);

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
                <h4>Visited Country {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map((country) => {
                            return <li key={country.cca3}>{country.name.common}</li>;
                        })
                    }
                </ul>
            </div>
            <div>
                <h4>Visited Flags {visitedFlags.length}</h4>
                {
                    visitedFlags.map((flags, index) => (<li key={index}><img src={flags}/></li>))
                }
            </div>
            <h1>Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map((country) => (
                        <Country key={country.cca3} country={country} setVisitedHandeler={setVisitedHandeler}
                                 flagsHandeler={flagsHandeler}/>
                    ))
                }
            </div>

        </>
    )
        ;
};

export default Countries;