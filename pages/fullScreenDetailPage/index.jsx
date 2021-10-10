import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView, ImageBackground, Platform} from 'react-native';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import {cToF, getWeatherBackgroundImage} from '@/utils/utils';
import Loading from '@/components/Loading'
import NavigationBar from '@/components/NavigationBar'
import BasicInfo from './components/BasicInfo'
import MidWeatherInfo from './components/MidWeatherInfo'
import styles from './index.css';
import reactotron from 'reactotron-react-native';

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};

// Detailed weather display cell
const FullScreenDetailPage = (props) => {
  const {
    weather,
    dispatch,
    route,
    meta: {navigation},
  } = props
  const {item} = route.params;
  const {
    name,
    weather: itemWeather,
    main: {temp},
    coord: {lon, lat}
  } = item;
  const {main, description} = itemWeather[0]

  const screenData = useScreenDimensions();

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
      <ImageBackground style={[styles.detailPageContainer, {width: screenData.isLandscape ? '100%': getWidth(), height: getHeight()}]} source={getWeatherBackgroundImage(main)} resizeMode="cover">
        <ScrollView style={[{width: getWidth(), height: getHeight()}]}>
          <BasicInfo item={item}/>
          <MidWeatherInfo item={item}/>
        </ScrollView>
      </ImageBackground>
    </>
  );
}


export default connect(({weather, meta}) => ({
  weather,
  meta
}))(FullScreenDetailPage);