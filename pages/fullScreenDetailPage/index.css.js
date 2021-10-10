import {StyleSheet} from 'react-native';
import config from '@/config/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%', 
    marginBottom: 10,
    backgroundColor: 'red', 
  },
  detailPageContainer: {
    backgroundColor: 'yellow',
    marginTop: config.navBarHeight
  },
  landscapeView: {
    flexDirection: 'row'
  }
});
export default styles;