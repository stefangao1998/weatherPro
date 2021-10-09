import _ from 'lodash';

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