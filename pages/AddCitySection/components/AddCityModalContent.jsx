import React, {useState} from 'react';
import {Dimensions, View, Text} from 'react-native';
import {connect} from 'umi';
import {Icon, Modal} from '@ant-design/react-native';

import SearchBar from '@/components/SearchBar';
import styles from './style.css';

const AddCityModalContent = (props) => {
  const {
    weather,
    dispatch,
    hideModal,
    isShowingAddModal
  } = props;
  const {cities} = weather;

  const getHeightOfModal = () => {
    return Dimensions.get('window').height*0.8
  }

  return (
    <Modal
      popup
      visible={isShowingAddModal}
      animationType="slide-up"
      maskClosable
      closable
      onClose={hideModal}
    >
      <View style={[styles.addCityModalContent, {height: getHeightOfModal()}]}>
        <SearchBar onCancel={hideModal} onSubmitEditing/>
        <Text>Content...</Text>
        <Text>Content...</Text>
      </View>
    </Modal>
  );
};

export default connect(({weather}) => ({
  weather,
}))(AddCityModalContent);