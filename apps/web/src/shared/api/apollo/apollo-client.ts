import type { DefaultOptions } from '@apollo/client';
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_DOMAIN, API_TOKEN } from '@/shared/config/environment';

const typeDefs = gql`
  extend type Order {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    country: String!
    city: String!
    address: String!
    postcode: String!
  }
`;

const httpLink = createHttpLink({
  uri: `${API_DOMAIN}/graphql`,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${API_TOKEN}`,
  },
}));

export const defaultOptions: DefaultOptions = {
  query: {
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions,
  typeDefs,
  // connectToDevTools: true
});
