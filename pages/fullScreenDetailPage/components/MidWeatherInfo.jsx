import React, {useRef, useEffect} from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import {connect} from 'umi';
import moment from 'moment';

import {cToF} from '@/utils/utils';
import styles from './style.css';

const BasicLineWeather = ({titleLeft, textLeft, titleRight, textRight}) => (
  <View style={styles.basicLineInfo}>
    <View style={styles.leftBasicInfo}>
      <Text style={styles.basicLineTitle}>{titleLeft}</Text>
      <Text style={styles.basicLineText}>{textLeft}</Text>
    </View>
    <View style={styles.leftBasicInfo}>
      <Text style={styles.basicLineTitle}>{titleRight}</Text>
      <Text style={styles.basicLineText}>{textRight}</Text>
    </View>
  </View>
)

// Middle part of the weather cell, showing weather info
const MidWeatherInfo = (props) => {
  const {
    weather,
    item
  } = props;
  const {
    sys: {country, timezone, sunrise, sunset},
    main: {feelsLike, tempMin, tempMax, pressure, humidity},
    visibility,
    wind: {speed, deg},
    clouds: {all},
  } = item;

  const {temperatureUnit} = weather
  const isFahrenheit = temperatureUnit === 'fahrenheit'

  const springAnimated = useRef(new Animated.Value(250)).current 
  const animationStyles = {
    transform: [
      { translateY: springAnimated }
    ]
  };
  useEffect(() => {
    Animated.spring(
      springAnimated,
      {
        toValue: 0,
        duration: 2000,
        friction: 5,
        tension: 20
      }
    ).start();
  }, [springAnimated])


  // showing corresponding temperature number based on the unit
  const handleShowingTemp = (temp) => {
    const fahrTemp = cToF(temp)
    if (isFahrenheit) return `${Math.round(fahrTemp)}°F `
    return `${Math.round(temp)}°C`
  }
  const getWidth = () => {
    return Dimensions.get('screen').width
  }
  const getHeight = () => {
    return Dimensions.get('screen').height*0.5
  }

  const getTime = (time) => {
    return moment(time*1000).format('HH:MM')
  }

  return (
    <Animated.View style={[styles.midWeatherInfo, animationStyles, { width: getWidth(), height: getHeight()}]}>
      <BasicLineWeather titleLeft={'SUNRISE'} textLeft={getTime(sunrise)} titleRight={'SUNSET'} textRight={getTime(sunset)}/>
      <BasicLineWeather titleLeft={'MIN TEMP'} textLeft={handleShowingTemp(tempMin)} titleRight={'MAX TEMP'} textRight={handleShowingTemp(tempMax)}/>
      <BasicLineWeather titleLeft={'COUNTRY'} textLeft={country} titleRight={'TIMEZONE'} textRight={`UTC+${moment(timezone*1000).format('HH')}h`}/>
      <BasicLineWeather titleLeft={'PRESSURE'} textLeft={`${pressure} hPa`} titleRight={'VISIBILITY'} textRight={`${visibility/1000} km`}/>
      <BasicLineWeather titleLeft={'HUMIDITY'} textLeft={`${humidity}%`} titleRight={'FEELS LIKE'} textRight={handleShowingTemp(feelsLike)}/>
      <BasicLineWeather titleLeft={'WIND SPEED'} textLeft={`${speed} m/s`} titleRight={'WIND DEG'} textRight={`${deg}°`}/>
    </Animated.View>
  );
};

export default connect(({weather}) => ({
  weather,
}))(MidWeatherInfo);