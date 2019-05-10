const stations = require('./station_codes.json');

const exactSearch = input => {
  let result = (i = 0);

  while (!result) {
    if (
      stations[i]['CRS Code'] === input ||
      stations[i]['Station Name'] === input ||
      stations[i]['CRS Code'] === 'error'
    ) {
      result = stations[i];
    }
    i++;
  }
  return result;
};

console.log(exactSearch('hjhgk'));
