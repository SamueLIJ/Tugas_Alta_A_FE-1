import {ApolloClient,InMemoryCache} from "@apollo/client"

const client = new ApolloClient ({
    uri:"https://many-chipmunk-31.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers:{
        "x-hasura-admin-secret":
        "bkujqI4SzALsVJxdVoYWc3X4Y0pNuQRfwAmzmbcez7JVZ8F92i6reN7701gL4BvV",
    },
});

export default client;