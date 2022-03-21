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

const Toppings = (toppings) => {
  //       { name: "sour cream", amt: 1.99, selected: false },
  const onToppingChanged = (e) => {
    console.log(e.target.isChecked);
  };
  return toppings.map((topping) => (
    <label>
      <input
        type="checkbox"
        value={topping.amt}
        checked={topping.selected}
        onChange={onToppingChanged}
      />
      {topping.name}
    </label>
  ));
};

const Checkbox = (label, value, onChange) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

function ItemList() {
  const [addItem, { data, loading, error }] = useMutation(MUTATE_ITEM, {
    variables: { id: "foooool", name: "bigger fooool" },
  });
  if (loading) return <p> {loading}</p>;
  if (data) return <textarea value={JSON.stringify(data)}></textarea>;
  return <button onClick={addItem}>yarg</button>;
}

function App() {
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
  };
  const { name, amt, toppings } = state.order_types.find(
    (ot) => ot.name == "burrito"
  );
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <ItemList />
        {Toppings(toppings, false)}
      </header>
    </div>
  );
}
function Hello() {
  const { loading, error, data } = useQuery(ALL_ITEMS, {});
  return <pre>Hello {JSON.stringify(data, null, "\t")}!</pre>;
}

export default App;
