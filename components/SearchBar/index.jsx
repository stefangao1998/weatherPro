import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import SearchBox from './components/SearchBox';
import CancelSection from './components/CancelSection';
import styles from './index.css';

/** contains an seach input, switch tab, cancel button */
const SearchBar = (props) => {
  const {
    onCancel, 
    onSubmitEditing,
    chosenCountry,
    setChosenCountry
  } = props;

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <Text style={styles.header}>{'Enter city or location'}</Text>
      <View style={styles.searchBarSection}>
        <SearchBox searchText={searchText} setSearchText={setSearchText} onSubmitEditing={onSubmitEditing} chosenCountry={chosenCountry} setChosenCountry={setChosenCountry}/>
        <CancelSection onCancel={onCancel}/>
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  onCancel: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};

SearchBar.defaultProps = {
};

export default SearchBar
