// Lib to do AJAX calls
import axios from 'axios';

const API_KEY = 'a2f7a09a63e6e1143c3c86b680bb2b37';
// Template strings (backticks)
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// This will flow through the promise middleware 
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
