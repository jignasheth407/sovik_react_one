/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import LineChart from "components/LineChart/LineChart";
import LineChartTwo from "components/LineChart/LineChartTwo";
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import {
   dataBar,
  optionsBar,
  responsiveBar,
} from "variables/Variables.jsx";
import Header from 'components/Navbars/AdminNavbar'

class UserProfile extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className="content">
          <h2>EXPLORATORY ANALYSIS</h2>
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#home1">IMPRESSIONS VISUALIZATION</a></li>
              <li><a data-toggle="tab" href="#menu3">IMPRESSIONS VISUALIZATION</a></li>
            </ul>

            <div className="tab-content"><br/>
              <div id="home1" className="tab-pane fade in active">
                  <div className="form-horizontal">
                    <div class="form-group">
                      <label for="sel1" class="col-sm-2 control-label" >SELECT CHANNEL:</label>
                      <div class="col-sm-10">
                        <select class="form-control" id="sel1">
                          <option>YOUTUBE</option>
                          <option>GOOGLE</option>
                          <option>FACEBOOK</option>
                        
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="collapse1" class="panel-collapse collapse in table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>BRAND NAME</th>
                                <th>START DATE</th>
                                <th>END DATE</th>
                                <th>OTHER PARAMETERS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="text" placeholder="Input brand name" className="form-control"></input>
                                </td>
                                <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                                <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                                <td><button type="button" class="btn">GET DATA</button></td>
                              </tr>
                              
                            </tbody>
                          </table>
                        </div>
                  <div className="row">
                  
                      <div className="col-md-12 ">
                          {/* <ChartistGraph
                              data={dataBar}
                              type="Line"
                              options={optionsBar}
                              responsiveOptions={responsiveBar}
                          /> */}
                          <div >
                            < LineChart />
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div id="menu3" className="tab-pane fade">
                  {/* <div className="row">
                      <div className="col-md-8" style={{maxHeight:"320px"}}>
                          <ChartistGraph
                              data={dataBar}
                              type="Bar"
                              options={optionsBar}
                              responsiveOptions={responsiveBar}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-8" style={{maxHeight:"320px"}}>
                          <ChartistGraph
                              data={dataBar}
                              type="Bar"
                              options={optionsBar}
                              responsiveOptions={responsiveBar}
                          />
                      </div>
                  </div> */}
              
              </div>
            </div>
         </div>
         </>
    );
  }
}

export default UserProfile;
