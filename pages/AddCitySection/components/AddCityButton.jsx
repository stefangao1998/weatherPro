import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'umi';
import {Icon} from '@ant-design/react-native';

import styles from './style.css';

const AddCityButton = (props) => {
  const {
    weather,
    dispatch
  } = props;



  return (
    <TouchableOpacity style={styles.addCityButton}>
      <Icon name="plus-circle" color="white" size={30} />
      {/* <Text style={styles.addCityText}>{'+'}</Text> */}
    </TouchableOpacity>
  );
};

export default connect(({weather}) => ({
  weather,
}))(AddCityButton);