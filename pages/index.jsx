import React from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from '@/tabs/HomeScreen';

// main index page
const IndexPage = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </>
  );
}

IndexPage.title = 'WeatherPro';
IndexPage.headerTintColor = '#ffffff';
IndexPage.headerTitleStyle = {
  fontWeight: 'bold',
};
IndexPage.headerStyle = {
  backgroundColor: '#000000',
};

export default IndexPage
