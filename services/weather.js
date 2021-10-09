import config from '@/config/common';
import axios from 'axios';

export async function getOneCityWeatherByName(params) {
  const {city} = params
  const url = `${config.openWeatherServerUrl}/weather?q=${city}&units=metric&appid=${config.openWeatherAPIKey}`;

  return await axios.get(url);
}

export async function findCitiesByName(params) {
  const {city} = params
  const url = `${config.openWeatherServerUrl}/find?q=${city}&units=metric&appid=${config.openWeatherAPIKey}`;

  return await axios.get(url);
}

export async function getOneCityWeatherByID(params) {
  const {cityID} = params
  const url = `${config.openWeatherServerUrl}/weather?id=${cityID}&units=metric&appid=${config.openWeatherAPIKey}`;

  return await axios.get(url);
}

export async function getSeveralCitiesWeather(params) {
  const {cities} = params
  // in the format of id=524901,703448,2643743
  const url = `${config.openWeatherServerUrl}/group?id=${cities}&units=metric&appid=${config.openWeatherAPIKey}`;

  return await axios.get(url);
}
