import {
  getOneCityWeatherByName,
  getOneCityWeatherByID,
  findCitiesByName,
  getSeveralCitiesWeather
} from '@/services/weather';
import {convertJsonToCamelCase} from '@/utils/utils';
import {Toast} from '@ant-design/react-native';
import reactotron from 'reactotron-react-native';
import config, {defaultCities} from '@/config/common';
import {persistStore, persistReducer} from 'redux-persist';

export default {
  namespace: 'weather',
  state: {
    loading: false,             // bool for indicate if loading

    temperatureUnit: false,     // celsius, fahrenheit
    cities: [],                 // cities name and id json array
    citiesWeather: []           // cities weather json array
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'setCities',
      });
    },
  },
  effects: {
    *fetchOneCityWeatherByName({city}, {call, put}) {
      const response = yield call(getOneCityWeatherByName, {
        city,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        // yield put({
        //   type: 'setCities',
        //   cities: result,
        // });
        // Toast.success('Success');
      } else {
        // Toast.fail('Fail');
      }
    },
    *fetchOneCityWeatherByID({cityID}, {call, put}) {
      const response = yield call(getOneCityWeatherByID, {
        cityID,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        // yield put({
        //   type: 'setCities',
        //   cities: result,
        // });
        // Toast.success('Success');
      } else {
        // Toast.fail('Fail');
      }
    },
    *fetchCitiesByName({city}, {call, put}) {
      const response = yield call(findCitiesByName, {
        city,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        // yield put({
        //   type: 'setCities',
        //   cities: result,
        // });
        // Toast.success('Success');
        return result.list
      } else {
        // Toast.fail('Fail');
      }
      return true
    },
    *fetchSeveralCitiesWeather(_, {select, call, put}) {
      const {cities} = yield select((state) => ({
        cities: state.weather.cities,
      }));
      yield put({
        type: 'setLoading',
        loading: true,
      });
      const currCitiesArray = cities.map((item, index)=> (item.id))
      const currCities = currCitiesArray.join()
      const response = yield call(getSeveralCitiesWeather, {
        cities: currCities,
      });
      if (response.status===200) {
        const result = convertJsonToCamelCase(response.data);
        if (result&&result.list) {
          yield put({
            type: 'setCitiesWeather',
            citiesWeather: result.list,
          });
        }
        // Toast.success('Success');
      } else {
        // Toast.fail('Fail');
      }
      yield put({
        type: 'setLoading',
        loading: false,
      });
      return true
    },
  },
  reducers: {
    // set if loading
    setLoading(state, {loading}) {
      return {
        ...state,
        loading,
      };
    },
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
