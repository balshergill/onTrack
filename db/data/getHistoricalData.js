const fs = require('fs');
const { basicAuth } = require('../../keys');
const axios = require('axios');
const moment = require('moment');
const path = require('path');
const directoryPath = path.join(__dirname, './raw-data');
// console.log(directoryPath);
const yesterday = moment().subtract(1, 'day');
const day = yesterday.format('DD');
const month = yesterday.format('MM');
const year = yesterday.format('YYYY');

// console.log(moment(`${year}${month}${day}`, 'YYYY-MM-DD').format());
// console.log(day, month, year);

const existingDates = fs
  .readdirSync(directoryPath, function(err, files) {
    return files;
  })
  .map(file => {
    return file.slice(0, -5);
  });

console.log(
  existingDates[existingDates.length - 1],
  yesterday.format('YYYYMMDD')
);

if (
  existingDates[existingDates.length - 1] !== yesterday.format('YYYY-MM-DD')
) {
  console.log('files missing');
}

// axios
//   .get(
//     // 'https://api.rtt.io/api/v1/json/service/Y52118/${year}/${month}/${day}',
//     {
//       auth: basicAuth
//     }
//   )
//   .then(data => {
//     fs.writeFile(`${year}${month}${day}`, data, err => {
//       if (err) throw err;
//       else console.log(`${year}${month}${day} saved.`);
//     });
//   });
