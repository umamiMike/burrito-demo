import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";

import { createHttpLink } from "apollo-link-http";
import App from "./App";

const cache = new InMemoryCache();
// Create an HTTP link to the Absinthe server.

const link = createHttpLink({
  uri: "http://localhost:4000/api",
});
const client = new ApolloClient({
  link,
  cache,
});

const ALL_ITEMS = gql`
  query {
    allItems {
      id
      name
    }
  }
`;

client
  .query({
    query: ALL_ITEMS,
  })
  .then((result) => {
    console.log("result: ");
    console.log(result);
  });

const MUTATE_ITEM = gql`
  mutation AddItem($newItem: input) {
    addItem(input: $newItem) {
      id
      name
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
