import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tempUnitButton: {
    flexDirection: 'row',
    // flex: 1
  },
  tempUnitSwitchText: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 20
  },
  highlightedText: {
    fontWeight: 'bold',
  },
  addCityButton: {
    flexDirection: 'row',
    // flex: 1
  },
  addCityText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  },
  linkButton: {
    flexDirection: 'row',
    // flex: 1
  },
  addCityModalContent: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  resultScrollView: { 
    flex: 1, 
    backgroundColor: '#f5f5f9', 
    width: '100%'
  },
  singleResult: {
    width: '100%',
  }
});
export default styles;