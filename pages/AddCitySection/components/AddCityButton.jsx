import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'umi';
import {Icon, Modal} from '@ant-design/react-native';

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
      <Modal
        popup
        visible={isShowingAddModal}
        animationType="slide-up"
        maskClosable
        closable
        // transparent
        onClose={hideModal}
      >
        {/* <SubItem> */}
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, height: 100 }}>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
          </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default connect(({weather}) => ({
  weather,
}))(AddCityButton);