import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import {Icon} from '@ant-design/react-native';

import styles from './style.css';

// for linking the website
const LinkArea = () => {
  const openLink = () => {
    Linking.openURL('http://google.com')
  }
  return (
    <TouchableOpacity style={styles.linkButton} onPress={openLink}>
      <Icon name="link" color="white" size={30} />
    </TouchableOpacity>
  );
};

export default LinkArea