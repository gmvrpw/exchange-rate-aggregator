export interface StockPrice {
  value: {
    minValue: number;
    maxValue: number;
  };
  currency: {
    currency: string;
    icon: string;
  };
}
