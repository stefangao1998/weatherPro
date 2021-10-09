import React from 'react';
import {TouchableOpacity} from "react-native";
import { Icon } from '@ant-design/react-native';
import styles from './style.css';

const BackButton = (props) => {
  const {
    onBack,
    backButtonColor,
    height
  } = props;

  return (
    <TouchableOpacity
      style={[styles.backButton, {height: height}]}
      onPress={onBack}
    >
      <Icon name='left' color={backButtonColor} size={20} />
    </TouchableOpacity>
  )
};

export default BackButton;