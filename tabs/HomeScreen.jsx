import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'umi';

import MainWeatherSection from '@/pages/MainWeatherSection'
import AddCitySection from '@/pages/AddCitySection'
import styles from './index.css';

// tab for home screen
const HomeScreen = (props) => {
  const {
    weather,
    dispatch
  } = props;

  useEffect(()=>{
    // set default initial temperature unit to celsius
    dispatch({
      type: 'weather/temperatureUnit',
      temperatureUnit: 'celsius'
    });
  })
  
  return (
    <>
      <ScrollView style={styles.scrollViewContainer}>
        <MainWeatherSection />
        <AddCitySection />
      </ScrollView>
    </>
  );
}

export default connect(({weather}) => ({
  weather,
}))(HomeScreen);