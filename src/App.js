import React from 'react';
import WeatherState from './context/WeatherState';
import WeatherInfo from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => (
  <WeatherState>
    <WeatherInfo />
  </WeatherState>
);
export default App;
