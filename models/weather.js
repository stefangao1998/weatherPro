export default {
  namespace: 'weather',
  state: {
    temperatureUnit: false    // celsius, fahrenheit
  },
  effects: {
    *login(_, {call, put}) {
      
    },
  },
  reducers: {
    // set the temperature unit
    setTemperatureUnit(state, {temperatureUnit}) {
      return {
        ...state,
        temperatureUnit,
      };
    },
  },
};
