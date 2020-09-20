const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const dbString = process.env.MONGODB_STRING;
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
  console.log('polaczono z mongodb');
})

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=> {
    console.log("slucham na porcie 4000")
});