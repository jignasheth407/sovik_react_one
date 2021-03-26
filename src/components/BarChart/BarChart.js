import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#2335ff",
            borderColor: "#000",
            borderWidth: 1,
            //stack: 1,
            // hoverBackgroundColor: "#23efb2",
            // hoverBorderColor: "red",
            data: [65, 59, 80, 81, 56, 55, 40]
          },

          {
            label: "My second dataset",
            backgroundColor: "#FF6B0F",
            borderColor: "#000",
            borderWidth: 1,
            //stack: 1,
            // hoverBackgroundColor: "#1956ff",
            // hoverBorderColor: "red",
            data: [45, 79, 50, 41, 16, 85, 20]
          }
        ]
      }
    };
  }

  render() {
    const options = {
      responsive: true,
      legend: {
        display: false
      },
      type: "bar"
    };
    return (
      <Bar
        data={this.state.data}
        width={439}
        height={135}
        options={options}
      />
    );
  }
}

export default BarChart
