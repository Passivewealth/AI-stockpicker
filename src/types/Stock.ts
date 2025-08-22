export interface Stock {
  symbol: string;
  company: string;
  price: number;
  change: number;
  week1: number;
  month1: number;
  month3: number;
  month6: number;
  fundamental: number;
  technical: number;
  sentiment: number;
  valuation: number;
  industry: number;
  tradeRanking: string;
  marketCap?: string;
  volume?: string;
  logo?: string;
}