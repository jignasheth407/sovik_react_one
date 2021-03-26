import React from 'react';
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";


HighchartsMore(Highcharts);
class BubbleChartTwo extends React.Component{
   componentDidMount(){
      Highcharts.chart('chart-container', {

         chart: {
             type: 'bubble',
             plotBorderWidth: 1,
             zoomType: 'xy'
         },
     
         legend: {
             enabled: false
         },
     
         title: {
             text: 'Return on Investment and Marketing Contribution by DMA'
         },
          
         accessibility: {
             point: {
                 valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
             }
         },
     
         xAxis: {
             gridLineWidth: 1,
             title: {
                 text: 'Percentage'
             },
             labels: {
                 format: '{value}%'
             },
             plotLines: [{
                 color: 'black',
                 dashStyle: 'line',
                 width: 1,
                 value: 14.1,
                 label: {
                     rotation: 0,
                     y: 15,
                     style: {
                         fontStyle: 'italic'
                     },
                     text: ''
                 },
                 zIndex: 3
             }],
             accessibility: {
                 rangeDescription: 'Range: '
             }
         },
     
         yAxis: {
             startOnTick: false,
             endOnTick: false,
             title: {
                 text: 'ROI'
             },
             labels: {
                 format: '${value}'
             },
             maxPadding: 0.2,
             plotLines: [{
                 color: 'black',
                 dashStyle: 'line',
                 width: 1,
                 value: 1.7,
                 label: {
                     align: 'right',
                     style: {
                         fontStyle: 'italic'
                     },
                     text: '',
                     x: -10
                 },
                 zIndex: 3
             }],
             accessibility: {
                 rangeDescription: 'Range: '
             }
         },
     
         tooltip: {
             useHTML: true,
             headerFormat: '<table>',
             pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                 '<tr><th>Field 1:</th><td>${point.x}</td></tr>' +
                 '<tr><th>Field 2:</th><td>{point.y}%</td></tr>' 
                 /*'<tr><th>Field 3:</th><td>{point.z}%</td></tr>'*/,
             footerFormat: '</table>',
             followPointer: true
         },
     
         plotOptions: {
             series: {
                 dataLabels: {
                     enabled: true,
                     color: 'blue',
                     format: '{point.name}'
                 }
             },
             bubble:{
                color:'#ff6b0f',                
             }
         },
     
         series: [{
             data: [
                 { x: 1.5, y: 0.2, name: 'BE', country: 'Belgium' },
                 { x: 11.5, y: 0.5, name: 'DE', country: 'Germany' },
                 { x: 12.5, y: 0.9, name: 'FI', country: 'Finland' },
                 { x: 10.5, y: 1.3,  name: 'NL', country: 'Netherlands' },
                 { x: 15.5, y: 1.7, name: 'SE', country: 'Sweden' },
                 { x: 18.0, y: 1.9, name: 'ES', country: 'Spain' },
                 { x: 11.0, y: 2.1, name: 'FR', country: 'France' },
                 { x: 19.8, y: 2.5,  name: 'NO', country: 'Norway' },
                 { x: 12.8, y: 2.5, name: 'UK', country: 'United Kingdom' },
                 { x: 14.0, y: 0.6, name: 'IT', country: 'Italy' },
                 { x: 13.6, y: 1.2,  name: 'RU', country: 'Russia' },
                 { x: 18.5, y: 0.8, name: 'US', country: 'United States' },
                 { x: 16.8, y: 2.7, name: 'HU', country: 'Hungary' },
                 { x: 15.0, y: 1.6, name: 'PT', country: 'Portugal' },
                 { x: 17.4, y: 1.5, name: 'NZ', country: 'New Zealand' }
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

export default BubbleChartTwo