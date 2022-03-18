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
    addItem(id: "fooo", name: "fooobian") {
      items {
        name
      }
    }
  }
`;

function ItemList() {
  const [addItem, { data, loading, error }] = useMutation(MUTATE_ITEM, {
    variables: { id: "foooool", name: "bigger fooool" },
  });
  console.log("itmelist run");

  if (loading) return <p> {loading}</p>;
  if (data) return <textarea value={JSON.stringify(data)}></textarea>;
  return <button onClick={addItem}>yarg</button>;
}

function App() {
  return (
    <div className="App">
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <header className="App-header">
        <Hello />
        <ItemList />
      </header>
    </div>
  );
}
function Hello() {
  const { loading, error, data } = useQuery(ALL_ITEMS, {});
  return <pre>Hello {JSON.stringify(data, null, "\t")}!</pre>;
}

export default App;
