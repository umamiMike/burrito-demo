import { useEffect, useState } from "react";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
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

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result.data.rates));

function Hello() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch("/heading")
      .then((x) => {
        console.log({ x });
        return x.json();
      })
      .then((x) => {
        console.log({ x });
        return setMessage(x.burritos);
      });
  }, [setMessage]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Burritos. {message}</h1>
    </div>
  );
}

export default App;
