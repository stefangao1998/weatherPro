import {StyleSheet} from 'react-native';
import config from '@/config/common';

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    position: 'absolute',
    top: (config.navBarHeight-40)/2, //24
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: (config.navBarHeight-40)/2, //22
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 36,
    // width: 36, // if want wrap words, add width
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#7284A5',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (config.navBarHeight-40)/2, //24
    left: 5,
    height: 36,
    width: 36,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  titleText: {fontSize: 17, fontWeight: '600', color: '#fff'}
});

export default styles;
