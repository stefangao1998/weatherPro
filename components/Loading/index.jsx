import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'umi';

import styles from './index.css';

// for loading indicator
const Loading = (props) => {
  const {weather} = props;
  const {loading} = weather;
  if (!loading) return null
  return (
    <ActivityIndicator size={'small'} style={styles.headerLoading}/>
  );
}

export default connect(({weather}) => ({
  weather,
}))(Loading);