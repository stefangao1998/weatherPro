import React, {useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'umi';

import Loading from '@/components/Loading'
import HomeScreen from '@/tabs/HomeScreen';

// main index page
const IndexPage = (props) => {
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'WeatherPro',
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {fontWeight: 'bold'},
      headerRight: () => <Loading />,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </>
  );
}

export default connect(({weather}) => ({
  weather,
}))(IndexPage);