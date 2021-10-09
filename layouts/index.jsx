import React, {useLayoutEffect} from 'react';
import {BackButton} from 'umi';

const Layout = (props) => {
  const {
    children, 
    route, 
    navigation,
  } = props;

  // toggle header shown
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation, route.name]);

  return (
    <BackButton>
      {children}
    </BackButton>
  );
}

export default Layout
