import React, { useReducer } from 'react';
import axios from 'axios';
import weatherReducer from './weatherReducer';
import weatherContext from './weatherContext';

const ACTIONS = {
  GET_WEATHER_CURRENT_LOCATON: 'GET_WEATHER_CURRENT_LOCATION',
  GET_FIVE_DAY_FORECAST: 'GET_FIVE_DAY_FORECAST',
  GET_WEATHER_CURRENT_LOCATION_FAHENRIENT: 'GET_WEATHER_CURRENT_LOCATION_FAHENRIENT',
  GET_FIVE_DAY_FORECAST_FAHENRIENT: 'GET_FIVE_DAY_FORECAST_FAHENRIENT'
};


const WeatherState = (props) => {
  const initialState = {
    weatherInfo: [],
    forecasts: {},
    weatherInfoFahenrient:[],
    forecastsFahenrient:{}
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);


  //  get weather of current location
  const currentLocation = async (city) => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`
    );
    dispatch({
      type: ACTIONS.GET_WEATHER_CURRENT_LOCATON,
      // data to send
      payload: res.data,
    });
    console.log(res.data);
    // console.log(new Date(res.data.dt * 1000 - res.data.timezone * 1000));
  };

  // GET FIVE DAY FORECAST
  const fiveDayForeCast = async (city) => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric&cnt=5 `
    );
    dispatch({
      type: ACTIONS.GET_FIVE_DAY_FORECAST,
      payload: res.data,
    });
    const getNextDay = () => {
      let previous_day = '';
  if (res.data){
      res.data.list.forEach((con) => {
        const text = con.dt_txt;
        let date = new Date(text);
       let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        // console.log(formatted_date);
        if (formatted_date !== previous_day) {
          console.log(res.data.list)
         
        }
        previous_day = formatted_date;
        
      })}
    };
   
    console.log(res.data);
    console.log(getNextDay())
  };
 
  return (
    <weatherContext.Provider
      value={{
        weatherInfo: state.weatherInfo,
        forecasts: state.forecasts,
        weatherInfoFahenrient:state.weatherInfoFahenrient,
        forecastsFahenrient: state.forecastsFahenrient,
        fiveDayForeCast,
        currentLocation,
     
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
