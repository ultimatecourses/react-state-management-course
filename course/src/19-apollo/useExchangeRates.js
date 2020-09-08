import { useQuery, gql } from '@apollo/client';

const exchangeRatesQuery = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const useExchangeRates = () => useQuery(exchangeRatesQuery);
