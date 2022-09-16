import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl84til760fnf01t62f9c49ia/master",
  cache: new InMemoryCache(),
});

export { client };
