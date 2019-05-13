const app = require('./App');

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
