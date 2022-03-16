import { useQuery, useMutation, gql } from "@apollo/client";

const ALL_ITEMS = gql`
  query {
    allItems {
      id
      name
    }
  }
`;

const MUTATE_ITEM = gql`
  mutation AddItem {
    currentValue
  }
`;
function App() {
  const [addItem, { data, loading, error }] = useMutation(MUTATE_ITEM);

  const addItemHandler = (e) => {
    e.preventDefault();
    addItem({ variables: { id: "foooool", name: "bigger fooool" } });
    console.log("clicked");
    console.log(error);
  };

  return (
    <div className="App">
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>

      <header className="App-header">
        <Hello />
      </header>
      <div>
        <button onClick={addItemHandler}>Add a burrito</button>
      </div>
    </div>
  );
}
function Hello() {
  const { loading, error, data } = useQuery(ALL_ITEMS, {});
  if (loading) return <p>Loading ...</p>;
  return <pre>Hello {JSON.stringify(data, null, "\t")}!</pre>;
}

export default App;
