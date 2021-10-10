import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, Text, ImageBackground} from 'react-native';
import {IconFill} from '@ant-design/icons-react-native';

import THUNDERSTORM_IMAGE from '@/assets/thunder.jpg';
import DRIZZLE_IMAGE from '@/assets/drizzle.jpeg';
import RAIN_IMAGE from '@/assets/rain.jpg';
import SNOW_IMAGE from '@/assets/snow.jpg';
import CLEAR_IMAGE from '@/assets/clear.jpg';
import CLOUDY_IMAGE from '@/assets/cloudy.jpg';
import FOG_IMAGE from '@/assets/fog.jpeg';

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

  const getWeatherBackgroundImage = () => {
    if (des==='Thunderstorm') return THUNDERSTORM_IMAGE
    if (des==='Drizzle') return DRIZZLE_IMAGE
    if (des==='Rain') return RAIN_IMAGE
    if (des==='Snow') return SNOW_IMAGE
    if (des==='Clear') return CLEAR_IMAGE
    if (des==='Clouds') return CLOUDY_IMAGE
    else return FOG_IMAGE  // Complex Atmosphere
  }

  return (
    // <View style={styles.container}>
    <ImageBackground style={styles.container} source={getWeatherBackgroundImage()} resizeMode="cover">
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