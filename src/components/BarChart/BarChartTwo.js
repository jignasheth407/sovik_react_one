import React from "react";
import { Bar } from "react-chartjs-2";

class NewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#2335ff",
            borderColor: "#000",
            borderWidth: 1,
            hoverBorderColor: "#000",
            data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0, 6.1, 5.3, 1.3, 1.5, 2.9, 3.5, 1.9]
          },

          {
            label: "My second dataset",
            backgroundColor: "#FF6B0F",
            borderColor: "#000",
            borderWidth: 1,
            hoverBorderColor: "#000",
            data: [4.5, 7.9, 5.0, 4.1, 1.6, 8.5, 2.0, 9.2, 7.5, 8.8, 3.5, 2.8, 0.9]
          }
        ]
      }
    };
  }

  render() {
    const options = {
      responsive: true,
      scales: {
         yAxes: [ { gridLines : { display: false } } ],
         xAxes: [ { gridLines : { display: false } } ],
      },
      legend: {
        display: false
      },
      labels: { display: true},
      type: "bar",
    };
    return (
      <Bar
        data={this.state.data}
        width={650}
        height={250}
        options={options}
      />
    );
  }
}

export default NewChart
