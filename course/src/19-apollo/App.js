import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { useExchangeRates } from './useExchangeRates';

const App = () => {
  let { data, loading } = useExchangeRates();

  if (loading) return 'loading...';
  if (!data) return 'no data... :( ';

  return data.rates.map((rate) => (
    <div key={rate.currency}>
      {rate.currency}: {rate.rate}
    </div>
  ));
};

export const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
