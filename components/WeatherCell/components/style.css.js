import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'green',
    flex: 7,
    height: 100
  },
  cityNameText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 10
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    flex: 3,
    height: 100
  }, 
  temperatureText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50
  },
  temperatureUnitText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
});
export default styles;