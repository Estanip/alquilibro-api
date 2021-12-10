require("dotenv").config();
const app = require('./app');
const { conn } = require('./database/database')

const port = process.env.PORT || 3008;

// Syncing all the models at once.
try {
  conn.sync({ force: true }).then(() => {
    app.listen(port, () => {
      console.log('Server listen on port 3008');
    });
  });
} catch(err) {
  console.log(err)
};