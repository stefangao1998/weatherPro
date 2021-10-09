import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'umi';
import _ from 'lodash';

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
  
  const {temperatureUnit, cities, citiesWeather} = weather;

  useEffect(()=>{
    // set default initial temperature unit to celsius
    if (!temperatureUnit) {
      dispatch({
        type: 'weather/setTemperatureUnit',
        temperatureUnit: 'celsius'
      });
    }
    // set default initial cities array
    if (_.isEmpty(cities)) {
      dispatch({
        type: 'weather/setCities',
        cities: [...defaultCities]
      });
    }
    // get default cities weather
    if (_.isEmpty(citiesWeather)) {
      const citiesArray = defaultCities.map((item, index)=> (item.id))
      const cities = citiesArray.join()
      dispatch({
        type: 'weather/fetchSeveralCitiesWeather',
      });
    }
    const interval = setInterval(() => {
      dispatch({
        type: 'weather/fetchSeveralCitiesWeather',
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