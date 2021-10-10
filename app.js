import {TransitionPresets} from 'umi';
import {Linking, Platform} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './components/Loading';
import Reactotron from 'reactotron-react-native'

export function getReactNavigationDefaultScreenOptions() {
  /**
   * 查看 screenOptions 全字段：https://reactnavigation.org/docs/stack-navigator/#options
   *
   * 页面转场动画相关设置，可选值：
   * - ScaleFromCenterAndroid: Standard Android navigation transition when opening or closing an Activity on Android 10 (Q).
   * - RevealFromBottomAndroid: Standard Android navigation transition when opening or closing an Activity on Android 9 (Pie).
   * - FadeFromBottomAndroid: Standard Android navigation transition when opening or closing an Activity on Android < 9 (Oreo).
   * - SlideFromRightIOS: Standard iOS navigation transition
   * - ModalSlideFromBottomIOS: Standard iOS navigation transition for modals.
   * - ModalPresentationIOS: Standard iOS modal presentation style (introduced in iOS 13).
   * 根据当前平台（iOS/Android）自动探测：
   * - DefaultTransition: Default navigation transition for the current platform.
   * - ModalTransition: Default modal transition for the current platform.
   */

  // 统一 iOS/Android 页面动画为从右侧滑入
  // return {
  //   ...TransitionPresets.SlideFromRightIOS,
  // };

  // 也可以返回一个 thunk 函数
  return ({route}) => {
    // 单独为某个路由设置：
    if (route.name === '/fullScreenDetailPage') {
      // 为 /pages/login.js 页面设置为从底部滑入
      return Platform.select({
        ios: {
          ...TransitionPresets.ModalPresentationIOS,
        },
        android: {
          ...TransitionPresets.ScaleFromCenterAndroid,
        },
      });
    }
    // 其余页面从右侧滑入
    return {...TransitionPresets.SlideFromRightIOS};
  };
}

const persistConfig = {
  timeout: 2000, // you can define your time. But is required.
  key: 'com.weatherPro.STATE',
  storage: AsyncStorage,
};

const persistEnhancer = () => (createStore) => (
  reducer,
  initialState,
  enhancer,
) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    enhancer,
  );
  const persist = persistStore(store, null);
  return {
    persist,
    ...store,
  };
};

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
  },
};

const PERSISTENCE_KEY = 'com.weatherPro.NAVIGATION_STATE';

// Returns the previously persistent local state. It is usually used in scenarios where applications need to be revived and state recovery is required.
export async function getReactNavigationInitialState() {
  try {
    const initialUrl = await Linking.getInitialURL();
    if (Platform.OS !== 'web' && initialUrl == null) {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      if (savedStateString) {
        return JSON.parse(savedStateString);
      }
    }
  } catch (ignored) {}
}

// custom return to original state display in the process of Loading, only implements getReactNavigationInitialState will only take effect.
export function getReactNavigationInitialIndicator() {
  return Loading;
}

// subscribe react-navigation Notification of status change: The navigation state is persisted and saved to the mobile phone every time the route changes
export async function onReactNavigationStateChange(state) {
  if (state) {
    await AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  }
}

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
