import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink} from "@apollo/client"

  const wsLink = new WebSocketLink({
    uri: 'wss://many-chipmunk-31.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams: {
          headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': 'bkujqI4SzALsVJxdVoYWc3X4Y0pNuQRfwAmzmbcez7JVZ8F92i6reN7701gL4BvV' }
        }
      }
  });



const httpLink = new HttpLink({
  uri: 'https://many-chipmunk-31.hasura.app/v1/graphql',
  headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': 'bkujqI4SzALsVJxdVoYWc3X4Y0pNuQRfwAmzmbcez7JVZ8F92i6reN7701gL4BvV' }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
