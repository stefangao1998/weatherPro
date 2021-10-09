import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import config from '@/config/common';
import BackButton from './components/BackButton';
import TabTitle from './components/TabTitle';
import TabText from './components/TabText';
import styles from './index.css';

/** conatins backbutton, title, and right corner text button */
const NavigationBar = (props) => {
  const {
    title,
    showBackbutton,
    backButtonColor,
    showText,
    onPressText,
    invisible,
    onBack,
    height,
    headerRight
  } = props;

  return (
    <View style={[styles.navBarContainer,{backgroundColor: invisible ? "transparent" : "black", height: height}]}>
      <TabTitle title={title} height={height}/>
      {showBackbutton && <BackButton onBack={onBack} backButtonColor={backButtonColor} height={height}/>}
      {showText||headerRight && <TabText onPressText={onPressText} showText={showText} height={height} headerRight={headerRight}/>}
    </View>
  );
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  showBackbutton: PropTypes.bool,
  backButtonColor: PropTypes.string,
  showText: PropTypes.element,
  onPressText: PropTypes.func,
  invisible: PropTypes.bool,
  onBack: PropTypes.func,
  height: PropTypes.number
};

NavigationBar.defaultProps = {
  showBackbutton: true,
  backButtonColor: 'black',
  height: config.navBarHeight
};

export default NavigationBar