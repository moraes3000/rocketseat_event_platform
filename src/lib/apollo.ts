import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9xkka1iwf01xx4gfw25ou/master',

  cache: new InMemoryCache()
})