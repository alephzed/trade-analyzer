export class QuoteResult {
/*  {
        "GOOG": {
          "assetType": "EQUITY",
          "symbol": "GOOG",
          "description": "Alphabet Inc. - Class C Capital Stock",
          "bidPrice": 1031.16,
          "bidSize": 100,
          "bidId": "V",
          "askPrice": 1031.66,
          "askSize": 100,
          "askId": "Q",
          "lastPrice": 1031.49,
          "lastSize": 100,
          "lastId": "B",
          "openPrice": 1026.44,
          "highPrice": 1036.28,
          "lowPrice": 1011.34,
          "bidTick": " ",
          "closePrice": 1015.45,
          "netChange": 16.04,
          "totalVolume": 1739362,
          "quoteTimeInLong": 1523390291567,
          "tradeTimeInLong": 1523390291497,
          "mark": 1031.49,
          "exchange": "q",
          "exchangeName": "NASDAQ",
          "marginable": true,
          "shortable": true,
          "volatility": 0.029386614,
          "digits": 4,
          "52WkHigh": 1186.89,
          "52WkLow": 817.0201,
          "nAV": 0,
          "peRatio": 55.12,
          "divAmount": 0,
          "divYield": 0,
          "divDate": "",
          "securityStatus": "Normal",
          "regularMarketLastPrice": 1031.49,
          "regularMarketLastSize": 1,
          "regularMarketNetChange": 16.04,
          "regularMarketTradeTimeInLong": 1523390291497,
          "delayed": true
        }
      } */

    symbol: string;
    lastPrice: number;
    netChange: number;
    regularMarketLastPrice: number;
    regularMarketNetChange: number;
    regularMarketTradeTimeInLong: number;

    constructor(obj?: any) {
        this.symbol = obj && obj.symbol || null;
        this.lastPrice = obj && obj.lastPrice || null;
        this.netChange = obj && obj.netChange || null;
        this.regularMarketLastPrice = obj && obj.regularMarketLastPrice || null;
        this.regularMarketNetChange = obj && obj.regularMarketNetChange || null;
        this.regularMarketTradeTimeInLong = obj && obj.regularMarketTradeTimeInLong || null;

    }
}
