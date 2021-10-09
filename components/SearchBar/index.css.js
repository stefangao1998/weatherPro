import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'column',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  header: {
    marginTop: 5,
    color: 'white'
  },
  searchBarSection: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default styles;