import React, {useLayoutEffect} from 'react';
import {BackButton, connect} from 'umi';

const Layout = (props) => {
  const {
    children, 
    route, 
    navigation,
    weather
  } = props;

  // toggle header shown
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: true});
  }, [navigation, route.name]);

  return (
    <BackButton>
      {children}
    </BackButton>
  );
}

export default connect(({weather}) => ({
  weather,
}))(Layout);
