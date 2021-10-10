import React, {
  Dimensions,
  Platform,
  StyleSheet,
  PixelRatio,
} from 'react-native';

export default config = {
  openWeatherServerUrl: 'http://api.openweathermap.org/data/2.5',
  openWeatherAPIKey: '2021e26970caae7292961a822671a30f',
  openWeatherIconUrl: 'http://openweathermap.org/img/wn/',
  navBarHeight:
    Dimensions.get('window').width >= 375 &&
    Dimensions.get('window').height >= 812
      ? 87
      : 60,
};

const defaultCities = [
  {
    name: 'Sydney',
    id: 4163971
  },
  {
    name: 'Melbourne', 
    id: 2147714
  }, 
  {
    name: 'Brisbane',
    id: 2174003
  }
]

const defaultCitiesWeather= [
  {
    name: 'Sydney',
    main: {
      temp: 23
    }
  },
  {
    name: 'Melbourne', 
    main: {
      temp: 25
    }
  }, 
  {
    name: 'Brisbane',
    main: {
      temp: 27
    }
  }
]

export {defaultCities, defaultCitiesWeather}