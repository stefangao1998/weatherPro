import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'umi';

import {cToF} from '@/utils/utils';
import styles from './style.css';

// right part of the weather cell, showing weather info
const WeatherInfo = (props) => {
  const {
    temperature,
    weather
  } = props;
  const {temperatureUnit} = weather
  const isFahrenheit = temperatureUnit === 'fahrenheit'

  // showing corresponding temperature number based on the unit
  const handleShowingTemp = () => {
    const fahrTemp = cToF(temperature)
    if (isFahrenheit) return Math.round(fahrTemp)
    return Math.round(temperature)
  }

  return (
    <View style={styles.rightContainer}>
      <Text style={styles.temperatureText}>{handleShowingTemp()}</Text>
      <Text style={styles.temperatureUnitText}>{isFahrenheit ? '°F' : '°C'}</Text>
    </View>
  );
};

export default connect(({weather}) => ({
  weather,
}))(WeatherInfo);