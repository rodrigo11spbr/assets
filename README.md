# Assets API

### Description

 >- Get assets properties from nasdaq

##### Request Samples
[POST] <code>/api/asset/</code>

* Payload

``` json
{
    "ticker":["aal", "aapl"]
}
```

* Response

``` json
[
  {
    "symbol": "AAL",
    "name": "American Airlines Group Inc.",
    "price": 9.95,
    "changesPercentage": -1.49,
    "change": -0.15,
    "dayLow": 9.8622,
    "dayHigh": 10.2,
    "yearHigh": 34.99,
    "yearLow": 9.09,
    "marketCap": 4207795456,
    "priceAvg50": 11.247143,
    "priceAvg200": 22.39853,
    "volume": 11146354,
    "avgVolume": 61337693,
    "exhange": "NASDAQ",
    "open": 10.01,
    "previousClose": 10.1,
    "eps": -1.697,
    "pe": null,
    "earningsAnnouncement": "2020-04-30T11:30:11.000+0000",
    "sharesOutstanding": 422894016,
    "timestamp": 1589293470
  },
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "price": 317.3453,
    "changesPercentage": 0.74,
    "change": 2.3353,
    "dayLow": 316.255,
    "dayHigh": 319.09,
    "yearHigh": 327.85,
    "yearLow": 170.27,
    "marketCap": 1375479267328,
    "priceAvg50": 273.18457,
    "priceAvg200": 282.02905,
    "volume": 10908718,
    "avgVolume": 51487874,
    "exhange": "NASDAQ",
    "open": 317.83,
    "previousClose": 315.01,
    "eps": 12.728,
    "pe": 24.93285,
    "earningsAnnouncement": "2020-04-30T20:30:00.000+0000",
    "sharesOutstanding": 4334329856,
    "timestamp": 1589293470
  }
]
```

[GET]<code>/api/asset?numberOfPage=0&totalPerPage=2</code>

* Response

``` json
{
  "pageNumber": "0",
  "totalInPage": 2,
  "data": [
    {
      "_id": "5eb99c8ebc970d59d8e834f0",
      "asset": [
        {
          "symbol": "AAL",
          "name": "American Airlines Group Inc.",
          "price": 9.97,
          "changesPercentage": -1.68,
          "change": -0.17,
          "dayLow": 9.59,
          "dayHigh": 10.25,
          "yearHigh": 34.99,
          "yearLow": 9.09,
          "marketCap": 4216253440,
          "priceAvg50": 11.280883,
          "priceAvg200": 22.540514,
          "volume": 39958901,
          "avgVolume": 60692775,
          "exhange": "NASDAQ",
          "open": 9.92,
          "previousClose": 10.14,
          "eps": -1.697,
          "pe": null,
          "earningsAnnouncement": "2020-04-30T11:30:11.000+0000",
          "sharesOutstanding": 422894016,
          "timestamp": 1589222538
        },
        {
          "symbol": "AAPL",
          "name": "Apple Inc.",
          "price": 315.82,
          "changesPercentage": 1.83,
          "change": 5.69,
          "dayLow": 307.24,
          "dayHigh": 315.93,
          "yearHigh": 327.85,
          "yearLow": 170.27,
          "marketCap": 1368868126720,
          "priceAvg50": 271.9544,
          "priceAvg200": 281.5038,
          "volume": 27600077,
          "avgVolume": 51280172,
          "exhange": "NASDAQ",
          "open": 308.1,
          "previousClose": 310.13,
          "eps": 12.728,
          "pe": 24.813011,
          "earningsAnnouncement": "2020-04-30T20:30:00.000+0000",
          "sharesOutstanding": 4334329856,
          "timestamp": 1589222538
        }
```
