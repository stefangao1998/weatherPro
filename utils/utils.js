import _ from 'lodash';

import THUNDERSTORM_IMAGE from '@/assets/thunder.jpg';
import DRIZZLE_IMAGE from '@/assets/drizzle.jpeg';
import RAIN_IMAGE from '@/assets/rain.jpg';
import SNOW_IMAGE from '@/assets/snow.jpg';
import CLEAR_IMAGE from '@/assets/clear.jpg';
import CLOUDY_IMAGE from '@/assets/cloudy.jpg';
import FOG_IMAGE from '@/assets/fog.jpeg';

export const cToF = (celsius) => {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
};

export const convertJsonToCamelCase = (data) => {
  const toCamel = (x) => _.camelCase(x);

  const convert = (item) => {
    let newData = item instanceof Array ? [] : {};
    _.forEach(item, (value, key) => {
      if (value instanceof Array) {
        newData[toCamel(key)] = [];
        _.forEach(value, (v) => {
          if (v instanceof Object) {
            newData[toCamel(key)].push(convert(v));
          } else {
            newData[toCamel(key)].push(v);
          }
        });
      } else if (value instanceof Object) {
        newData[toCamel(key)] = convert(value);
      } else {
        newData[toCamel(key)] = value;
      }
    });

    return newData;
  };

  const convertedData = data instanceof Object ? convert(data) : data;

  return convertedData;
};

export const convertCamelCaseToSnakeCase = (data) => {
  const toCamel = (x) => _.snakeCase(x);

  const convert = (item) => {
    let newData = item instanceof Array ? [] : {};
    _.forEach(item, (value, key) => {
      if (value instanceof Array) {
        newData[toCamel(key)] = [];
        _.forEach(value, (v) => {
          if (v instanceof Object) {
            newData[toCamel(key)].push(convert(v));
          } else {
            newData[toCamel(key)].push(v);
          }
        });
      } else if (value instanceof Object) {
        newData[toCamel(key)] = convert(value);
      } else {
        newData[toCamel(key)] = value;
      }
    });

    return newData;
  };

  const convertedData = data instanceof Object ? convert(data) : data;

  return convertedData;
};

export const getWeatherBackgroundImage = (des) => {
  if (des==='Thunderstorm') return THUNDERSTORM_IMAGE
  if (des==='Drizzle') return DRIZZLE_IMAGE
  if (des==='Rain') return RAIN_IMAGE
  if (des==='Snow') return SNOW_IMAGE
  if (des==='Clear') return CLEAR_IMAGE
  if (des==='Clouds') return CLOUDY_IMAGE
  else return FOG_IMAGE  // Complex Atmosphere
}