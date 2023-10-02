import { useEffect, useState } from "react";

function HomePage() {
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const getCountries = async() => {
            const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
            const countriesAPI = await response.json();
            setCountries(countriesAPI);
        }
        getCountries();
        
        console.log(countries);

    }, [])

    return (
        <>
            <h1>
                WikiCountries: Your Guide to the World
            </h1>
        </>
    )
}

export default HomePage;
