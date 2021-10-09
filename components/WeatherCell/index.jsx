import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, Text, Animated} from 'react-native';
import {IconFill} from '@ant-design/icons-react-native';

import CityInfo from './components/CityInfo';
import WeatherInfo from './components/WeatherInfo';
import styles from './index.css';

// Single weather display cell
const WeatherCell = (props) => {
  const {
    isShowingDetail,
    cityname,
    temperature
  } = props;

  return (
    <View style={styles.container}>
      <CityInfo cityname={cityname}/>
      <WeatherInfo temperature={temperature}/>
    </View>
  );
};

WeatherCell.propTypes = {
  isShowingDetail: PropTypes.bool,
  cityname: PropTypes.string,
  temperature: PropTypes.number,
};

WeatherCell.defaultProps = {
  isShowingDetail: false,
  cityname: 'N/A',
  temperature: 0,
};

export default WeatherCell;