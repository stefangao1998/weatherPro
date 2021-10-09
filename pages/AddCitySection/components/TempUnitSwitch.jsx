import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'umi';

import styles from './style.css';

// for change the temperature unit
const TempUnitSwitch = (props) => {
  const {
    weather,
    dispatch
  } = props;
  const {temperatureUnit} = weather
  const isFahrenheit = temperatureUnit === 'fahrenheit'

  // choose the opposite temperature unit 
  const handleChangeTempUnit = () => {
    dispatch({
      type: 'weather/setTemperatureUnit',
      temperatureUnit: isFahrenheit ? 'celsius' : 'fahrenheit'
    });
  }

  return (
    <TouchableOpacity style={styles.tempUnitButton} onPress={handleChangeTempUnit}>
      <Text style={[styles.tempUnitSwitchText, !isFahrenheit&&styles.highlightedText]}>{'°C'}</Text>
      <Text style={styles.tempUnitSwitchText}>{'/'}</Text>
      <Text style={[styles.tempUnitSwitchText, isFahrenheit&&styles.highlightedText]}>{'°F'}</Text>
    </TouchableOpacity>
  );
};

export default connect(({weather}) => ({
  weather,
}))(TempUnitSwitch);