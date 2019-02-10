const schema = require('./hasura');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const config = require('../../config/config');

const app = express();

schema().then((schema) => {

  const server = new ApolloServer({
    schema,
  });

  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen({ port: config.port }, () =>
    console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
  ) 
  

}).catch((error) => {
  console.log(error);
});