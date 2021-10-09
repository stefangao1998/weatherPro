import React, {useLayoutEffect} from 'react';
import {BackButton, connect, Redirect} from 'umi';

const Layout = ({children, hasSignedIn, route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: true});
  }, [navigation, route.name]);

  return (
    <BackButton>
      {children}
    </BackButton>
  );
}

export default connect(({user: {hasSignedIn}}) => ({
  hasSignedIn,
}))(Layout);
