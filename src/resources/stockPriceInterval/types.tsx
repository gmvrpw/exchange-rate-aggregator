interface DataPoint {
  date: number;
  openValue: number;
  minValue: number;
  maxValue: number;
  closeValue: number;
}
export type StockPriceInterval = DataPoint[];
