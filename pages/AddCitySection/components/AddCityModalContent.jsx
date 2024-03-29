import React, {useState} from 'react';
import {Dimensions, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'umi';
import {List, Modal, ActivityIndicator, Toast} from '@ant-design/react-native';
import _ from 'lodash';

import SearchBar from '@/components/SearchBar';
import styles from './style.css';
import reactotron from 'reactotron-react-native';

const AddCityModalContent = (props) => {
  const {
    weather,
    dispatch,
    hideModal,
    isShowingAddModal,
  } = props;
  const {cities} = weather;
  const [chosenCountry, setChosenCountry] = useState('AU');
  const [isLoading, setIsLoading] = useState(false);
  const [cityResult, setCityResult] = useState([]);

  const getHeightOfModal = () => {
    return Dimensions.get('screen').height*0.8
  }

  const findCities = (text) => {
    if (!_.isEmpty(text) && text.length>2) {
      setIsLoading(true)
      // find cities that match the name
      dispatch({
        type: 'weather/fetchCitiesByName',
        city: text
      }).then((res)=>{
        setCityResult(res)
        setIsLoading(false)
      })
    } else {
      Toast.fail('Invalid input');
    }
  }

  const ResultSection = () => (
    <ScrollView
      style={styles.resultScrollView}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <List>
      {cityResult.map((item, index)=>{
        const {id, name, sys:{country}} = item
        const handleNewData = () => {
          // add another chosen city
          const newCity = {name, id}
          const alreadyIn = cities.some(city => city.name === name && city.id === id)
          if (!alreadyIn) {
            dispatch({
              type: 'weather/setCities',
              cities: [...cities, newCity]
            });
            dispatch({
              type: 'weather/fetchSeveralCitiesWeather',
            });
            hideModal()
          } else {
            Toast.fail('Already exists');
          }
        }
        return (
          <List.Item key={index} extra={id} arrow="empty" onPress={handleNewData}>
            {name}{country}
          </List.Item>
        )
      })}
      </List>
    </ScrollView>
  )

  return (
    <Modal
      popup
      visible={isShowingAddModal}
      animationType="slide-up"
      maskClosable
      style={styles.modalContainer}
      closable
      onClose={hideModal}
    >
      <View style={[styles.addCityModalContent, {height: getHeightOfModal()}]}>
        <SearchBar onCancel={hideModal} onSubmitEditing={findCities} chosenCountry={chosenCountry} setChosenCountry={setChosenCountry}/>
        <ResultSection />
        {isLoading&&<ActivityIndicator
          animating={isLoading}
          toast
          size="large"
          text="Loading..."
        />}
      </View>
    </Modal>
  );
};

export default connect(({weather}) => ({
  weather,
}))(AddCityModalContent);