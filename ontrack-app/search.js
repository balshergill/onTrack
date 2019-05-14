const stations = require('./station_codes.json');

exports.exactSearch = input => {
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

const laxSearch = input => {
  let result = stations.filter(station => {
    return (
      station['CRS Code'].includes(input.toUpperCase()) ||
      station['Station Name'].toUpperCase().includes(
        input
          .split("'")
          .join('')
          .toUpperCase()
      )
    );
  });

  if (!result.length) {
    result.push({ 'Station Name': 'error', 'CRS Code': 'error' });
  }

  if (result.length - 1) {
    for (let i = 0; i < result.length; i++) {
      if (
        result[i]['CRS Code'] === input.toUpperCase() ||
        result[i]['Station Name'].toUpperCase() ===
          input
            .split("'")
            .join('')
            .toUpperCase()
      ) {
        let match = result[i];
        result.splice(i, 1);
        result.unshift(match);
      }
    }
  }

  return result;
};
