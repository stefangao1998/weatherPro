import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Dimensions, Image, Animated} from 'react-native';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import {cToF, getWeatherBackgroundImage} from '@/utils/utils';
import styles from './style.css';

// Top part of the weather detail page, showing weather info
const BasicInfo = (props) => {
  const {
    weather,
    item
  } = props;
  const {
    name,
    weather: itemWeather,
    main: {temp},
    coord: {lon, lat}
  } = item;
  const {main, description, icon} = itemWeather[0]
  const iconLink = `${config.openWeatherIconUrl}${icon}@2x.png`

  const {temperatureUnit} = weather
  const isFahrenheit = temperatureUnit === 'fahrenheit'

  const fadeAnim = useRef(new Animated.Value(0)).current 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

  // showing corresponding temperature number based on the unit
  const handleShowingTemp = () => {
    const fahrTemp = cToF(temp)
    if (isFahrenheit) return `${Math.round(fahrTemp)}°F `
    return `${Math.round(temp)}°C`
  }
  const getWidth = () => {
    return Dimensions.get('screen').width
  }
  const getHeight = () => {
    return Dimensions.get('screen').height*0.4
  }
  
  return (
    <Animated.View style={[styles.topBasicInfo, {opacity: fadeAnim, width: getWidth(), height: getHeight()}]}>
      <Text style={styles.cityNameText}>{name}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Text style={styles.temperatureText}>{handleShowingTemp()}</Text>
      {/* <Text style={styles.temperatureUnitText}>{isFahrenheit ? '°F' : '°C'}</Text> */}
      <Text style={styles.coordText}>{`L:${Math.round(lon)}°, H:${Math.round(lat)}°`}</Text>
      <Image style={styles.desIcon} source={{uri: iconLink}}/>
    </Animated.View>
  );
};

export default connect(({weather}) => ({
  weather,
}))(BasicInfo);