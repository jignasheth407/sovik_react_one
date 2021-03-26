
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Table, Grid, Row, Col } from "react-bootstrap";
import '../assets/css/style.css';
import Card from "components/Card/Card";
import Button from "components/CustomButton/CustomButton";
import {
   style_chart,
   thArray,
   tdArray,
   dataPie,
   dataBar,
  optionsBar,
  responsiveBar,
} from "variables/Variables.jsx";
import BarChart from "components/BarChart/BarChart";
import BarChartTwo from "../components/BarChart/BarChartTwo";
import BubbleChartTwo from "components/BubbleChart/BubbleChartTwo";
import List from 'components/NewTable/List';
import Header from 'components/Navbars/AdminNavbar'


class Typography extends Component {
  constructor(props){
  super(props)

  this.state= {
    requiredItem: 0,
    brochureOne: [
      {

      }
    ]
  }
}
  render() {
    return (
      <>
      <Header/>
      <div className="content">
        <h2>MODEL OUTPUT</h2>
          {/* for switching b/w tabs */}
          <ul className="nav nav-tabs">
            <li className="active"><a href="#home" data-toggle="tab">Individual Channel</a></li>
            <li><a href="#menu1" data-toggle="tab">Overall Output</a></li>            
          </ul>
          {/* for switching b/w tabs */}
            <div className="tab-content">
              {/* Tab one*/}
              <div id="home" className="tab-pane fade in active">
                <div className="row" id="header">
                  <div className="col-sm-8 text-center">
                    <h3 className="mt-0">Individual Channel</h3>
                  </div>

                  <div className="col-sm-4 text-right ">
                    <form className="form-inline">
                      <div className="form-group">
                        <label className="switch">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className="form-group mb-2 mo_select">
                        <select className="form-control form-control-lg">
                          <option>Traditional</option>
                          <option>Digital</option>
                          <option>Social</option>
                        </select>
                      </div>
                    </form>
                  </div>       
                </div>
                {/*  */}

              {/* blue bg */}
                

                  <div className="col-sm-12 bg_blue">

                  </div>       
                
                {/*  */}

                {/*3rd row  */}
      
                <div className="row">
                  {/* column 1 */}
                  <div className="col-sm-2">
                    <h6 className="text-center text_head">Prior Year</h6>
                      <div className="py_box">
                        <h6 className="py_head mt-2">$6M</h6>
                        <span className="py_describe">PY TV Media Spend</span>
                      </div>

                      <div className="py_box">
                        <h6 className="py_head">$6M</h6>
                        <span className="py_describe">PY TV Media Spend</span>
                      </div>

                      <div className="py_box">
                        <h6 className="py_head">$6M</h6>
                        <span className="py_describe">PY TV Media Spend</span>
                      </div>

                      <div className="py_box">
                        <h6 className="py_head">$6M</h6>
                        <span className="py_describe">PY TV Media Spend</span>
                      </div>

                  </div>
        
                  {/*column 2*/}
                  <div className="col-sm-2 pr-0">
                    <h6 className="text-center text_head">Selected Period</h6>
                    <div className="py_box">
                      <h6 className="py_head">$5M</h6>
                        <span className="py_describe">TV Media Spend</span>
                    </div>

                    <div className="py_box">
                      <h6 className="py_head">$5M</h6>
                      <span className="py_describe">PY TV Media Spend</span>
                    </div>

                    <div className="py_box">
                      <h6 className="py_head">$5M</h6>
                      <span className="py_describe">PY TV Media Spend</span>
                    </div>

                    <div className="py_box">
                      <h6 className="py_head">$5M</h6>
                      <span className="py_describe">PY TV Media Spend</span>
                    </div>
                  </div>
        
                  <div className="col-sm-8">
                    <h6 className="text-center">Chart</h6>
                      <div className="">
                        {/* chart 1 */}
                        <div className="col-sm-12 chart-outline">
                          <h6>TV Score vs TV Score 12 MAGO Over Time</h6>
                          <BarChart />
                        </div>
                        {/* chart 2 */}
                        <div className="col-sm-12 chart-outline">
                          <h6>TV Score vs TV Score 12 MAGO Over Time</h6>
                          <BarChart />
                        </div>
                      </div>
                  </div>
       
                </div>
              </div>
              {/* Tab one end*/}
              
              {/* Tab two */}
              <div id="menu1" className="tab-pane fade">
                <h3>Overall Result</h3>

                
                  {/* inside tab for switching between charts */}
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#modelOutput_one" data-toggle="tab">Location Chart</a></li>
                    <li><a href="#modelOutput_two" data-toggle="tab">Overview Chart</a></li> 
                    <li><a href="#modelOutput_three" data-toggle="tab">Model Output</a></li>                              
                  </ul>
                    {/* tab 1 for chart 1 */}
                    <div className="tab-content">
                      <div id="modelOutput_one" className="tab-pane fade in active">
                        
                          <div className="col-sm-12 bubble_chart">                            
                            <BubbleChartTwo/>
                          </div>
                        
                      </div>
                      {/* tab 2 for chart 2 */}
                      <div id="modelOutput_two" className="tab-pane fade">
                        <div className="">
                          <div className="overview_chart">
                            <div className="">
                              {/* table one starts */}
                              <div className="table-responsive">
                              <table className="table text-center table-bordered overview_table">
                                <thead>
                                  <tr>
                                    <th scope="col">Channel</th>
                                    <th scope="col">Instagram</th>
                                    <th scope="col">Facebook</th>
                                    <th scope="col">Prog. Display</th>
                                    <th scope="col">Online Videos</th>
                                    <th scope="col">Digital Display</th>
                                    <th scope="col">Print</th>
                                    <th scope="col">Hispanic Local</th>
                                    <th scope="col">Local TV</th>
                                    <th scope="col">Out of Home</th>
                                    <th scope="col">Twitter</th>
                                    <th scope="col">Digital Audio</th>
                                    <th scope="col">Radio</th>
                                    <th scope="col">National TV</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope= "row">Norm: </th>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                    <td>$2.65</td>
                                  </tr>
                                </tbody>
                              </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                            <div className="col-sm-12">
                              <BarChartTwo />
                            </div>                          
                          <div className="table-responsive">
                          <table className="table text-center table-bordered overview_table">
                            <thead>
                              <tr>
                                <th scope="col">Spend(MM)</th>
                                <th scope="col">Total</th>
                                <th scope="col">Instagram</th>
                                <th scope="col">Facebook</th>
                                <th scope="col">Prog. Display</th>
                                <th scope="col">Online Videos</th>
                                <th scope="col">Digital Display</th>
                                <th scope="col">Print</th>
                                <th scope="col">Hispanic Local</th>
                                <th scope="col">Local TV</th>
                                <th scope="col">Out of Home</th>
                                <th scope="col">Twitter</th>
                                <th scope="col">Digital Audio</th>
                                <th scope="col">Radio</th>
                                <th scope="col">National TV</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">CY 2018</th>
                                <td>$6.5</td>
                                <td>$5.9</td>
                                <td>$8.0</td>
                                <td>$8.1</td>
                                <td>$5.6</td>
                                <td>$5.5</td>
                                <td>$4.0</td>
                                <td>$6.1</td>
                                <td>$5.3</td>
                                <td>$1.3</td>
                                <td>$1.5</td>
                                <td>$2.9</td>
                                <td>$3.5</td>
                                <td>$1.9</td>
                              </tr>

                              <tr>
                                <th scope="row">CY 2019</th>
                                <td>$4.5</td>
                                <td>$7.9</td>
                                <td>$5.0</td>
                                <td>$4.1</td>
                                <td>$1.6</td>
                                <td>$8.5</td>
                                <td>$2.0</td>
                                <td>$9.2</td>
                                <td>$7.5</td>
                                <td>$8.8</td>
                                <td>$3.5</td>
                                <td>$2.8</td>
                                <td>$0.9</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                          </div>
                        </div>
                      </div>
                    {/* tab 2 for chart end */}

                    {/* model output */}
                      <div id="modelOutput_three" className="tab-pane fade">
                        {/* the data saved in modelling page will be shown here */}
                      <List />
                      </div>
                    </div>                
              </div>
              {/* Tab two end*/}
            </div>
          {/* Tab end here */}

        {/* tv anlysis */}
      </div>
      </>
    );
  }
}

export default Typography;
