import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'umi';
import {Toast} from '@ant-design/react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import config, {defaultCitiesWeather} from '@/config/common';
import WeatherCell from '@/components/WeatherCell';
import styles from './index.css';
import reactotron from 'reactotron-react-native';

// display main weather info section
const MainWeatherSection = (props) => {
  const {
    weather,
    dispatch,
    meta: {navigation}
  } = props
  const {cities, citiesWeather} = weather
  const [showingDetailIndex, setShowingDetailIndex] = useState(-1);

  const handleDeleteData = (item) => {
    // delete one chosen city
    const {name, id} = item
    const newCities = cities.filter(city => city.id !== id)
    if (newCities) {
      dispatch({
        type: 'weather/setCities',
        cities: [...newCities]
      });
      dispatch({
        type: 'weather/fetchSeveralCitiesWeather',
      }).then(()=>{
        Toast.success('Success');
      })
    } 
  }
  
  // map the weather cell based on the location data fetched 
  const MapWeatherData = () => (
    <SwipeListView
      data={citiesWeather}
      renderItem={(data, index) => {
        const {item} = data
        const {name, main:{temp}, weather: itemWeather,} = item;
        const {main, icon} = itemWeather[0]
        const isShowingDetail = showingDetailIndex===index
        const goDetail = () => {
          navigation.navigate('/fullScreenDetailPage', {item})
        }
        return (
          <TouchableOpacity activeOpacity={0.9} onPress={goDetail} disabled={isShowingDetail}>
            <WeatherCell 
              key={index}
              cityname={name}
              temperature={temp}
              des={main}
              desIcon={icon}
            />
          </TouchableOpacity>
        )
      }}
      renderHiddenItem={ (data, index) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => handleDeleteData(data.item)}
          >
            <Text style={styles.backTextWhite}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      disableRightSwipe
      rightOpenValue={-75}
    />
  )
  
  return (
    <MapWeatherData />
  )
}


export default connect(({weather, meta}) => ({
  weather,
  meta
}))(MainWeatherSection);