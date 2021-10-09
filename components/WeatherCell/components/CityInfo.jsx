import React from 'react';
import {View, Text} from 'react-native';

import styles from './style.css';

// left part of the weathe cell, showing city info
const CityInfo = (props) => {
  const {
    cityname
  } = props;

  return (
    <View style={styles.leftContainer}>
      <Text style={styles.cityNameText}>{cityname}</Text>
    </View>
  );
};

export default CityInfo;