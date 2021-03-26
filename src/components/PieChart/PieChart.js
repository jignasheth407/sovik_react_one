import React, {Component} from 'react' 
import {Pie} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'blue',
    'Yellow',
    'green',
    'orange'
  ],
  datasets: [{
    data: [300, 50, 100, 30, 80],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#039e0a',
    '#f98034'
    ],
   //  hovercolors canbe added here
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
  }
}

class PieChart extends React.Component {


  render() {
    return(
      <div style={{ position: 'relative'}}>
        <Pie data={data} height={250} width={300} options={options}/>
      </div>
    );
  }
}

export default PieChart