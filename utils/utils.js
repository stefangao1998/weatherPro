import _ from 'lodash';

export const cToF = (celsius) => {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
};
