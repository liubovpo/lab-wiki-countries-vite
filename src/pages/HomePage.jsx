import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function HomePage() {
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const getCountries = async() => {
            const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
            const countriesAPI = await response.json();
            setCountries(countriesAPI);
        }
        getCountries();
        
        // console.log(countries);

    }, [])
    return (
        <>
            <h1>
                WikiCountries: Your Guide to the World
            </h1>
            <ul>
                {countries.map((country) => (
                    <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                        <li style={{width:"80px"}}>
                            <img src = {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  />
                            {country.name.official}
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default HomePage;
