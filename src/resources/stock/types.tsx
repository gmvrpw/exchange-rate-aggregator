export interface Market {
  market: {
    country: string;
    stockMarket: string;
  };
  currency: { currency: string; icon: string };
  price: number;
  priceExchanged: number;
}

export interface Stock {
  name: string;
  symbol: string;
  description: string;
  requiredCurrency: {
    currency: string;
    icon: string;
  };
  value: {
    minValue: number;
    maxValue: number;
  };
  markets: Market[];
}
