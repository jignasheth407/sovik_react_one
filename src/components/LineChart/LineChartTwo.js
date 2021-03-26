import React from 'react';
import * as Highcharts from "highcharts";


class LineChartTwo extends React.Component{
   componentDidMount(){
      Highcharts.chart('chart-container', {
         
      chart: {
         type:"line",
        events: {
          load: function() {
            this.series[0].addPoint(['Fourth', 120]);
            this.series[0].addPoint(['Fifth', 80])
          }
        }
      },
      xAxis: {
        minPadding: 0.05,
        maxPadding: 0.05
      },

      series: [{
        data: [
          ['First', 29.9],
          ['Second', 71.5],
          ['Third', 106.4]
        ]
      }]
    });

    
}
   render() {
      return(
         <div>
            <div id="chart-container">Loading...</div>
         </div>
      )
   }
}
export default LineChartTwo;

