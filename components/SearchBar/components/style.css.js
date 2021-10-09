import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBox: {
    // flex: 7,
    height: 32,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#E1E5E4',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    borderRadius: 5,
  },
  searchInput: {
    textAlign: 'left',
    flex: 10,
  },
  searchIconStyle: {
    color: '#636F8B', 
    marginLeft: 10, 
    flex: 1
  },
  closeIconStyle: {
    color: 'lightgrey', 
    marginRight: 5, 
    flex: 1
  },
  cancelStyle: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 17, 
    color: 'white'
  }
});

export default styles;