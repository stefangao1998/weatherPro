import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.css';

/** title part in the middle */
const TabTitle = (props) => {
  const {title, height} = props;

  const setTitleString = () => {
    return typeof title === 'string' ? (
      <Text style={styles.titleText}>{title}</Text>
    ) : (
      title
    );
  };

  return (
    <View style={[styles.titleContainer, {height: height}]}>
      {setTitleString()}
    </View>
  );
};

export default TabTitle;
