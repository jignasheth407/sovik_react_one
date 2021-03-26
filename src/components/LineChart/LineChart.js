import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Line chart dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#2335FF',
      borderColor: '#0033FF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#f78f4f',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 3,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#ff6b0f',
      pointHoverBorderColor: '#0B0B0B',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 20,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <h4>Line Chart</h4>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}