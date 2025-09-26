import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.name)

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // setVisited(visited ? false : true);

        setVisited(!visited)
        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Country : {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Visited Flags</button>
        </div>
    );
};

export default Country;