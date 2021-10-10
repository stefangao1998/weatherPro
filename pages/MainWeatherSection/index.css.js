import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%', 
    marginBottom: 10,
    // backgroundColor: 'red', 
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginBottom: 5,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backTextWhite: {
    color: '#FFF',
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
export default styles;