import { WebSocketLink } from '@apollo/client/link/ws';

const wsLink = new WebSocketLink({
    uri: 'wss://many-chipmunk-31.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams: {
          headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': 'bkujqI4SzALsVJxdVoYWc3X4Y0pNuQRfwAmzmbcez7JVZ8F92i6reN7701gL4BvV' }
        }
      }
  });

export default client;