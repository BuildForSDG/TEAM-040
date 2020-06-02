const app = require('./app');

// eslint-disable-next-line no-unused-vars
const routeApp = require('./routes/user');

// eslint-disable-next-line no-unused-vars
const client = require('./db/connectDB');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Running On port ${port}`);
});
