const {introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools');
const HttpLink = require('apollo-link-http');
const fetch = require('node-fetch');
const config = require('../../config/config');

const link = HttpLink.createHttpLink({ uri: config.url, fetch });

const schema = async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return executableSchema
}

module.exports = schema;