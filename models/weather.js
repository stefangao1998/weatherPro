import {
  getOneCityWeatherByName,
  getOneCityWeatherByID,
  getSeveralCitiesWeather
} from '@/services/weather';
import {convertJsonToCamelCase} from '@/utils/utils';
import {Toast} from '@ant-design/react-native';
import reactotron from 'reactotron-react-native';

export default {
  namespace: 'weather',
  state: {
    temperatureUnit: false,    // celsius, fahrenheit
    cities: [],
    citiesWeather: []
  },
  effects: {
    *fetchOneCityWeatherByName({city}, {call, put}) {
      const response = yield call(getOneCityWeatherByName, {
        city,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        reactotron.log('aaa', result)
        // yield put({
        //   type: 'setCities',
        //   cities: result,
        // });
        Toast.success('Success');
      } else {
        Toast.fail('Fail');
      }
    },
    *fetchSeveralCitiesWeather({cities}, {select, call, put}) {
      const response = yield call(getSeveralCitiesWeather, {
        cities,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        if (result&&result.list) {
          yield put({
            type: 'setCitiesWeather',
            citiesWeather: result.list,
          });
        }
        Toast.success('Success');
      } else {
        Toast.fail('Fail');
      }
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
    // set the cities as array of JSON
    setCities(state, {cities}) {
      return {
        ...state,
        cities,
      };
    },
    // set the cities weather data as array of JSON
    setCitiesWeather(state, {citiesWeather}) {
      return {
        ...state,
        citiesWeather,
      };
    },
  },
};
