import { useEffect, useState } from "react";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-client";
import { gql } from "apollo-boost";

// import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const cache = new InMemoryCache();
// Create an HTTP link to the Absinthe server.
const link = createHttpLink({
  uri: "http://localhost:4000/api",
});

const client = new ApolloClient({
  link,
  cache,
});

client
  .query({
    query: gql`
      query {
        allItems {
          id
          name
        }
      }
    `,
  })
  .then((result) => {
    console.log("result: ");
    console.log(result);
  });

// render(<App />, document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
        <header className="App-header">
          <Hello />
        </header>
      </ApolloProvider>
    </div>
  );
}
function Hello() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Burritos</h1>
    </div>
  );
}

export default App;
