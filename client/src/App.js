import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-client";
import { useMutation } from "@apollo/client";
import { gql, useQuery } from "apollo-boost";

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

// render(<App />, document.getElementById("root"));

function App() {
  const MUTATE_ITEM = gql`
  mutation  AddItem($id $name) {
addItem(id: $id, name: $name) {
id
name
}
`;
  const [addItem, { data, loading, error }] = useMutation(MUTATE_ITEM, {
    variables: {
      name: "big ol foool",
      id: "fidgety",
    },
  });
  console.log(addItem);
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
