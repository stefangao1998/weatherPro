export default {
  namespace: 'meta',
  state: {
    navigation: false,
  },
  effects: {
  },
  reducers: {
    // set if loading
    setNavigation(state, {navigation}) {
      return {
        ...state,
        navigation,
      };
    },
  },
};
