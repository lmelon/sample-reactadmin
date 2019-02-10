const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-boost');
const gql = require('graphql-tag');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');
const config = require('../../config/config')

const client = new ApolloClient({
  link: new HttpLink({ uri: config.url, fetch: fetch }),
  cache: new InMemoryCache()
});

module.exports = async (id) => {

    const data = await client.query({
        query: gql`
          query {
              files_by_pk(id: ${id}) {
                name
                domicile
                amount
                currency
                goals {
                    name
                    amount
                    priority
                    type
                    from
                    to
                    recurrence
                }
                    assets {
                    name
                    amount
                    recurrence
                }
              }
            }
        `,
      })

    return data;

}

