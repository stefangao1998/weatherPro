import React, {useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import Loading from '@/components/Loading'
import styles from './index.css';

// Detailed weather display cell
const FullScreenDetailPage = (props) => {
  const {
    weather,
    dispatch,
    meta: {navigation},
  } = props

  
  const getWidth = () => {
    return Dimensions.get('screen').width
  }

  const getHeight = () => {
    return Dimensions.get('screen').height
  }

  return (
    <View style={{backgroundColor:'yellow', width: getWidth(), height: getHeight(), top: 0, position: 'absolute', zIndex: 9}}>

    </View>
  );
}


export default connect(({weather, meta}) => ({
  weather,
  meta
}))(FullScreenDetailPage);