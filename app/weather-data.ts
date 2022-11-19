const data1 = (): any[] =>
[
  {
    Timestamp: '2018-01-01T00:00:00.000',
    TMax: 3.3,
    TMin: -12,
    Wind: 5.5,
    Rain: 0
  },
  {
    Timestamp: '2018-01-02T00:00:00.000',
    TMax: 5.2,
    TMin: -10,
    Wind: 8.1,
    Rain: 0
  },
  {
    Timestamp: '2018-01-03T00:00:00.000',
    TMax: 3.2,
    TMin: -8,
    Wind: 8.1,
    Rain: 0
  }
];

const data2 = (): any[] =>
[
  {
    Timestamp: '2018-01-03T00:00:00.000',
    TMax: 3.2,
    TMin: -8,
    Wind: 8.1,
    Rain: 0
  },
  {
    Timestamp: '2018-01-04T00:00:00.000',
    TMax: 3.3,
    TMin: -12,
    Wind: 5.5,
    Rain: 0
  },
  {
    Timestamp: '2018-01-05T00:00:00.000',
    TMax: 5.2,
    TMin: -10,
    Wind: 8.1,
    Rain: 0
  }
];

const data3 = (): any[] =>
[
  {
    Timestamp: '2018-01-05T00:00:00.000',
    TMax: 5.2,
    TMin: -10,
    Wind: 8.1,
    Rain: 0
  },
  {
    Timestamp: '2018-01-06T00:00:00.000',
    TMax: 3.2,
    TMin: -8,
    Wind: 8.1,
    Rain: 0
  },
  {
    Timestamp: '2018-01-07T00:00:00.000',
    TMax: 3.3,
    TMin: -12,
    Wind: 5.5,
    Rain: 0
  }
];

export const mockData1 = () =>
  data1().map(p => {
    p.Date = new Date(p.Timestamp);
    return p;
  }
);

export const mockData2 = () =>
  data2().map(p => {
    p.Date = new Date(p.Timestamp);
    return p;
  }
);

export const mockData3 = () =>
  data3().map(p => {
    p.Date = new Date(p.Timestamp);
    return p;
  }
);
