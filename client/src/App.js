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

  return <div>
    <h1 className="text-3xl font-bold underline">
      Burritos. {message}
    </h1>
    </div>;
      
}

export default App;
