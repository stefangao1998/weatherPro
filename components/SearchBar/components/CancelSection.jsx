import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";

import styles from './style.css';

const CancelSection = (props) => {
  const {onCancel} = props
  return (
    <View style={styles.cancelStyle}>
      <TouchableOpacity onPress={onCancel}>
        <Text style={styles.cancelText}>{'Cancel'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelSection;