import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBox: {
    // flex: 7,
    height: 32,
    width: '77%',
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
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  cancelText: {
    fontSize: 17, 
    color: 'white'
  },
  pickerContainer: {
    width: '20%',
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1
  },
  childrenContainer: {
    height: 36,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  childrenExtra: { 
    textAlign: 'right', 
    color: '#888', 
    marginRight: 15 
  },
  children: { flex: 1 }
});

export default styles;