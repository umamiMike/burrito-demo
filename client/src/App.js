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

const state = {
  order_types: [
    {
      name: "burrito",
      amt: 5.99,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "guac", amt: 3.99, selected: false },
      ],
    },
    {
      name: "taco",
      amt: 8.0,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "chilis", amt: 2.99, selected: false },
      ],
    },
  ],
  order_started: {
    type: "burrito",
    amt: 5.99,
    toppings: [
      { name: "sour cream", amt: 1.99, selected: false },
      { name: "guac", amt: 4.99, selected: false },
    ],
  },
};

function Topping() {}

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
