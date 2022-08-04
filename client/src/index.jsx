import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import './styles/output.css';
import './index.css';

import App from './App';

const cache = new InMemoryCache();
// Create an HTTP link to the Absinthe server.

const link = createHttpLink({
  uri: 'http://localhost:4000/api',
});
const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
