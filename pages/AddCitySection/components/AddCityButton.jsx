import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'umi';
import {Icon} from '@ant-design/react-native';

import AddCityModalContent from './AddCityModalContent'
import styles from './style.css';

const AddCityButton = (props) => {
  const {
    weather,
    dispatch
  } = props;
  const {cities} = weather;

  const [isShowingAddModal, setIsShowingAddModal]= useState(false)

  const test = () => {
    dispatch({
      type: 'weather/fetchSeveralCitiesWeather',
      city: 'Sydney'
    });
  }

  const toggleShowingModal = () => {
    setIsShowingAddModal(!isShowingAddModal)
  }

  const hideModal = () => {
    setIsShowingAddModal(false)
  }

  return (
    <TouchableOpacity style={styles.addCityButton} onPress={toggleShowingModal}>
      <Icon name="plus-circle" color="white" size={30} />
      <AddCityModalContent hideModal={hideModal} isShowingAddModal={isShowingAddModal}/>
    </TouchableOpacity>
  );
};

export default connect(({weather}) => ({
  weather,
}))(AddCityButton);