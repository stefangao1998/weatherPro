import React from 'react';
import {View, Text} from 'react-native';

import TempUnitSwitch from './components/TempUnitSwitch'
import AddCityButton from './components/AddCityButton'
import LinkArea from './components/LinkArea'
import styles from './index.css';

// Bottom section for toggle info
const AddCitySection = () => {  
  return (
    <View style={styles.container}>
      <TempUnitSwitch />
      <AddCityButton />
      <LinkArea />
    </View>
  )
}

export default AddCitySection;