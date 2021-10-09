import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'umi';

import styles from './index.css';

const HomeScreen = () => {
  const hasSignedIn = useSelector((state) => state.user.hasSignedIn);
  
  return (
    <>
      <ScrollView style={styles.scrollViewContainer}>
      </ScrollView>
    </>
  );
}

export default HomeScreen;