export interface CalculateItem {
  [key: string]: {
    paymentTotal: number;
    sendList: SendList;
  };
}
export interface SendList {
  [key: string]: number;
}
export interface CalculateGetPriceItem {
  [key: string]: number;
}
