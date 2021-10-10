import React from 'react';
import {View, Text, Image} from 'react-native';

import config, {defaultCitiesWeather} from '@/config/common';
import styles from './style.css';

// left part of the weathe cell, showing city info
const CityInfo = (props) => {
  const {
    cityname,
    des,
    desIcon
  } = props;

  const iconLink = `${config.openWeatherIconUrl}${desIcon}@2x.png`
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.cityNameText}>{cityname}</Text>
      {/* <Text style={styles.desText}>{des}</Text> */}
      <Image style={styles.desIcon} source={{uri: iconLink}}/>
    </View>
  );
};

export default CityInfo;