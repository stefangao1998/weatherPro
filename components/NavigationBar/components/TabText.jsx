import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style.css';

/** the text button at the right top corner */
const TabText = (props) => {
  const {onPressText, showText, height, headerRight} = props;

  return (
    <TouchableOpacity
      style={[styles.textContainer, {height: height}]}
      activeOpacity={0.7}
      onPress={onPressText}>
      {headerRight ? headerRight : <Text style={styles.tabText}>{showText}</Text>}
    </TouchableOpacity>
  );
};

export default TabText;
