import React, {useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'umi';

import Loading from '@/components/Loading'
import NavigationBar from '@/components/NavigationBar'
import HomeScreen from '@/tabs/HomeScreen';

// main index page
const IndexPage = (props) => {
  const {navigation, dispatch} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'WeatherPro',
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {fontWeight: 'bold'},
      headerRight: () => <Loading />,
    });
    dispatch({
      type: 'meta/setNavigation',
      navigation,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationBar 
        title={'WeatherPro'}
        showBackbutton={false}
        onBack={()=>navigation.goBack()}
        headerRight={<Loading />}
      />
      <HomeScreen />
    </>
  );
}

export default connect(({weather, meta}) => ({
  weather,
  meta
}))(IndexPage);