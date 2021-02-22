import React,{useState,useContext} from 'react';
import WeatherContext from '../context/weatherContext'

const Search = () => {
    const weatherContext = useContext(WeatherContext)
    const [city,setCity] = useState('ibadan')
    return (
        <div>
            
        </div>
    )
}

export default Search
