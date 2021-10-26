const mongoose = require('mongoose');

const username = 'estani';
const password = 'estani';
const dbname = 'alquilibrodb';

const app = require('./app');

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xq5za.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
    console.log("DB connected succesfully")
});

app.listen(3000, () => {
    console.log("Server listen on port 3000")
});