import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'umi';

import config, {defaultCities} from '@/config/common';
import MainWeatherSection from '@/pages/MainWeatherSection'
import AddCitySection from '@/pages/AddCitySection'
import styles from './index.css';
import reactotron from 'reactotron-react-native';

// tab for home screen
const HomeScreen = (props) => {
  const {
    weather,
    dispatch
  } = props


  useEffect(()=>{
    // set default initial temperature unit to celsius
    dispatch({
      type: 'weather/setTemperatureUnit',
      temperatureUnit: 'celsius'
    });
    // set default initial cities array
    dispatch({
      type: 'weather/setCities',
      cities: [...defaultCities]
    });
    // get default cities weather
    const citiesArray = defaultCities.map((item, index)=> (item.id))
    const cities = citiesArray.join()
    dispatch({
      type: 'weather/fetchSeveralCitiesWeather',
      cities
    });
    const interval = setInterval(() => {
      const {cities} = weather;
      const currCitiesArray = cities.map((item, index)=> (item.id))
      const currCities = currCitiesArray.join()
      dispatch({
        type: 'weather/fetchSeveralCitiesWeather',
        cities: currCities
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <>
      <ScrollView style={styles.scrollViewContainer}>
        <MainWeatherSection />
        <AddCitySection />
      </ScrollView>
    </>
  );
}

export default connect(({weather}) => ({
  weather,
}))(HomeScreen);