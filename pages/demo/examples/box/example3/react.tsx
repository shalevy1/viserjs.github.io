import { Chart, Tooltip, Axis, Box, Legend, Point } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const dataPre = {
  transform: [{
    type: 'fold',
    fields: ['SepalLength','SepalWidth','PetalLength','PetalWidth'],
    key: 'type',
    value: 'value'
  }, {
    type: 'bin.quantile',
    field: 'value',
    as: '_bin',
    groupBy: [ 'Species', 'type' ],
  }]
};

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green',
}

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/data/box-3.json', (data) => {
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    const tooltipOpts = {
      crosshairs: {
        type: 'rect',
      },
    };
    const seriesColor = ['Species', val => {
      return colorMap[val];
    }];
    const seriesStyle = ['Species', {
      stroke: '#545454',
      fill: val => {
        return colorMap[val];
      },
      fillOpacity: 0.3
    }];

    return (
      <div>
        <Chart forceFit height={400} data={data} dataPre={dataPre} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Axis />
          <Legend marker="circle" />
          <Box position="type*_bin" adjust="dodge" style={seriesStyle} color={seriesColor} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));