import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import Loading from '@/components/Loading'
import NavigationBar from '@/components/NavigationBar'
import BasicInfo from './components/BasicInfo'
import MidWeatherInfo from './components/MidWeatherInfo'
import styles from './index.css';
import reactotron from 'reactotron-react-native';

// Detailed weather display cell
const FullScreenDetailPage = (props) => {
  const {
    weather,
    dispatch,
    route,
    meta: {navigation},
  } = props
  const {item} = route.params;
  
  const getWidth = () => {
    return Dimensions.get('screen').width
  }
  const getHeight = () => {
    return Dimensions.get('screen').height
  }
  const getTitleName = () => {
    if (item&&item.name) return item.name
    return 'WeatherPro'
  }
  return (
    <>
      <NavigationBar 
        title={getTitleName()}
        showBackbutton={true}
        onBack={()=>navigation.goBack()}
        headerRight={<Loading />}
      />
      <ScrollView style={[styles.detailPageContainer, {width: getWidth(), height: getHeight()}]}>
        <BasicInfo item={item}/>
        <MidWeatherInfo item={item}/>
      </ScrollView>
    </>
  );
}


export default connect(({weather, meta}) => ({
  weather,
  meta
}))(FullScreenDetailPage);