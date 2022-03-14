import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
      </header>
    </div>
  );
}

function Hello() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch('/heading')
      .then((x) => {
        console.log({ x });
        return x.json();
      })
      .then((x) => {
        console.log({ x });
        return setMessage(x.burritos);
      });
  }, [setMessage]);

  return <div>Burritos. {message}</div>;
}

export default App;
