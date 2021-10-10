import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topBasicInfo: {
    // backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityNameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40
  },
  descriptionText: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 15
  },
  temperatureText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60
  },
  coordText: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 15
  },
  midWeatherInfo: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10
  },
  basicLineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 50,
    marginHorizontal: 10
  },
  basicLineTitle: {
    fontWeight: '500',
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14
  },
  basicLineText: {
    fontWeight: '500',
    color: 'white',
    fontSize: 22
  },
  leftBasicInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '40%',
  },
  desIcon: {
    width: 66,
    height: 58,
  },
});
export default styles;