import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import {Picker} from '@ant-design/react-native';

import styles from './style.css';

const countryCodes = require('@/assets/countrycodes.json');

const CustomChildren = (props) => {
  const {onPress, children, extra} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.childrenContainer}>
        <Text style={styles.children}>{children}</Text>
        <Text style={styles.childrenExtra}>
          {extra}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const CountryPicker = (props) => {
  const {
    chosenCountry, 
    setChosenCountry
  } = props;
  let countryCodePickerData = []
  countryCodes.sort().map((item, index)=>{
    const singleCountry = {
      label: item,
      value: item
    }
    countryCodePickerData.push(singleCountry)
  })
  return (
    <View style={styles.pickerContainer}>
      <Picker
        title={'Select country'}
        data={countryCodePickerData}
        cols={1}
        value={chosenCountry}
        onChange={v => setChosenCountry(v)}
        onOk={v => setChosenCountry(v)}
        okText={'Select'}
        dismissText={'Cancel'}
        extra={chosenCountry}
      >
        <CustomChildren>Customized children</CustomChildren>
      </Picker>
    </View>
  );
};

export default CountryPicker;