import React, {useState} from 'react';
import {
  View,
  TextInput,
  Appearance
} from "react-native";
import {Icon} from '@ant-design/react-native';

import CountryPicker from './CountryPicker';
import styles from './style.css';

/** contains input text, and icons */
const SearchBox = (props) => {
  const {
    searchText,
    setSearchText,
    onSubmitEditing,
    chosenCountry,
    setChosenCountry
  } = props;
  const colorScheme = Appearance.getColorScheme();
  const darkModeTextColor = colorScheme === 'dark' && 'black'


  return (
    <View style={styles.searchBox}>
      <CountryPicker chosenCountry={chosenCountry} setChosenCountry={setChosenCountry} chosenCountry={chosenCountry} setChosenCountry={setChosenCountry}/>
      <Icon
        name={'search'}
        size={18}
        style={styles.searchIconStyle}
      />
      <TextInput
        placeholder={'Search'}
        placeholderTextColor={'grey'}
        editable={true}
        style={[styles.searchInput, {color: darkModeTextColor}]}
        onChangeText={(text) => {
          setSearchText(text);
        }}
        onSubmitEditing={(event) => {
          onSubmitEditing(event.nativeEvent.text);
        }}
        value={searchText}
        returnKeyType={'search'}
      />
      <Icon
        name={'close-circle'}
        size={18}
        style={styles.closeIconStyle}
        onPress={() => setSearchText('')}
      />
    </View>
  );
};

export default SearchBox;