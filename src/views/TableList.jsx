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
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Header from 'components/Navbars/AdminNavbar'
import ModelDevelopment from "./ModelDevelopment";


class TableList extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className="content">
        <h2>MODELLING</h2>
            <ul className="nav nav-tabs">
              <li className="active"><a href="#home1" data-toggle="tab">INPUT DATA</a></li>
              <li><a href="#menu3" data-toggle="tab">MODEL DEVELOPMENT</a></li>
            </ul>

            <div className="tab-content">
              <div id="home1" className="tab-pane fade in active">
              <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  SOURCE 1: YOUTUBE</a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel panel-default">
                            
                  <div id="collapse1" className="panel-collapse collapse in table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>BRAND NAME</th>
                          <th>START DATE</th>
                          <th>END DATE</th>
                          <th>FREQUENCY(W/M/Q)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" placeholder="Input brand name" className="form-control"></input>
                          </td>
                          <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                          <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                          <td></td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                  SOURCE 2: GOOGLE</a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>BRAND NAME</th>
                          <th>START DATE</th>
                          <th>END DATE</th>
                          <th>FREQUENCY(W/M/Q)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" placeholder="Input brand name" className="form-control"></input>
                          </td>
                          <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                          <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                          <td></td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                      SOURCE 3: FACEBOOK</a>
                    </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse table-responsive">
                  <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>BRAND NAME</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>FREQUENCY(W/M/Q)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" placeholder="Input brand name" className="form-control"></input>
                            </td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td></td>
                          </tr>
                          
                        </tbody>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                      SOURCE 4: TWITTER</a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse table-responsive">
                  <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>BRAND NAME</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>FREQUENCY(W/M/Q)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" placeholder="Input brand name" className="form-control"></input>
                            </td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td></td>
                          </tr>
                          
                        </tbody>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                      SOURCE 5: INSTAGRAM</a>
                    </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse table-responsive">
                  <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>BRAND NAME</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>FREQUENCY(W/M/Q)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" placeholder="Input brand name" className="form-control"></input>
                            </td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td></td>
                          </tr>
                          
                        </tbody>
                  </table>
                </div>
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                      SOURCE 6: OTHER</a>
                    </h4>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse table-responsive">
                  <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>BRAND NAME</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>FREQUENCY(W/M/Q)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" placeholder="Input brand name" className="form-control"></input>
                            </td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td><input type="date" placeholder = "Input start date" className ="form-control"></input></td>
                            <td></td>
                          </tr>
                          
                        </tbody>
                  </table>
                </div>
              </div>
            </div>
              </div>
              {/* model development starts here */}
              <ModelDevelopment />
              {/* model development ends here */}         
            </div>
                
       </div>
      </>
      
      
    );
  }
}

export default TableList;
