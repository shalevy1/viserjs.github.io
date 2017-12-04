export const data = [
  { month: 'Jan', series2: 51, series1: 125 },
  { month: 'Feb', series2: 91, series1: 132 },
  { month: 'Mar', series2: 34, series1: 141 },
  { month: 'Apr', series2: 47, series1: 158 },
  { month: 'May', series2: 63, series1: 133 },
  { month: 'June', series2: 58, series1: 143 },
  { month: 'July', series2: 56, series1: 176 },
  { month: 'Aug', series2: 77, series1: 194 },
  { month: 'Sep', series2: 99, series1: 115 },
  { month: 'Oct', series2: 106, series1: 134 },
  { month: 'Nov', series2: 88, series1: 110 },
  { month: 'Dec', series2: 56, series1: 91 }
];

export const dataPre = {
  transform: {
    type: 'fold',
    fields: [ 'series1', 'series2' ], // 展开字段集
    key: 'key', // key字段
    value: 'value', // value字段
  }
};

export const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1
}];

