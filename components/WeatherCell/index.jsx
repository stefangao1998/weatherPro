import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, Text, ImageBackground} from 'react-native';

import {getWeatherBackgroundImage} from '@/utils/utils';
import CityInfo from './components/CityInfo';
import WeatherInfo from './components/WeatherInfo';
import styles from './index.css';

// Single weather display cell
const WeatherCell = (props) => {
  const {
    isShowingDetail,
    cityname,
    temperature,
    des,
    desIcon
  } = props;

  return (
    // <View style={styles.container}>
    <ImageBackground style={styles.container} source={getWeatherBackgroundImage(des)} resizeMode="cover">
      <CityInfo cityname={cityname} des={des} desIcon={desIcon}/>
      <WeatherInfo temperature={temperature}/>
    </ImageBackground>
    //</View>
  );
};

WeatherCell.propTypes = {
  isShowingDetail: PropTypes.bool,
  cityname: PropTypes.string,
  temperature: PropTypes.number,
  des: PropTypes.string,
  desIcon: PropTypes.string,
};

WeatherCell.defaultProps = {
  isShowingDetail: false,
  cityname: 'N/A',
  temperature: 0,
  des: 'Clear',
  desIcon: '03d'
};

export default WeatherCell;