const app = require('./App');

const { PORT = 5005 } = process.env;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
