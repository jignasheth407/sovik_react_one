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
import Button from 'components/CustomButton/CustomButton';
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Header from 'components/Navbars/AdminNavbar'
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";


class Dashboard extends Component {
  
   render() {  
    return (  
      <>  
      <Header/>   
      <div className="content">
        
             <h2>DATA</h2>
            <ul className="nav nav-tabs">
              <li className="active"><a href="#home" data-toggle="tab">CONNECT DATA</a></li>
              <li><a href="#menu1" data-toggle="tab">TRANSFORM DATA</a></li>
              <li><a href="#menu2" data-toggle="tab">STORE DATA</a></li>
            </ul>

            <div className="tab-content">
              
                  <div id="home" className="tab-pane fade in active">
                    <div class="panel-group" id="accordion">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                            SOURCE 1: YOUTUBE</a>
                          </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                            SOURCE 2: GOOGLE</a>
                          </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                            SOURCE 3: FACEBOOK</a>
                          </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                            SOURCE 4: TWITTER</a>
                          </h4>
                        </div>
                        <div id="collapse4" class="panel-collapse collapse table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                            SOURCE 5: INSTAGRAM</a>
                          </h4>
                        </div>
                        <div id="collapse5" class="panel-collapse collapse table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                            SOURCE 6: OTHER</a>
                          </h4>
                        </div>
                        <div id="collapse6" class="panel-collapse collapse table-responsive">
                          <table class="table table-hover">
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
                      </div>
                      
                      
                    </div>
                      
                  
                  </div>
                  <div id="menu1" className="tab-pane fade">
                    <h4>EDIT DATA</h4>
                    <form onSubmit="#">
                      <div className="form-group row">
                      <label for="inputEmail" class="col-sm-4 col-form-label">Brand Name</label>
                          <div class="col-sm-8">
                            <input type="text" class="form-control-plaintext"  placeholder="Brand Name"/>
                          </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputDataOne" class="col-sm-4 col-form-label">Data Parameter 1</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control-plaintext" id="inputDataOne" placeholder="Data One"/>
                        </div>
                      </div>   
                      <div class="form-group row">
                        <label for="inputDataTwo" class="col-sm-4 col-form-label">Data Parameter 2</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control-plaintext" id="inputDataTwo" placeholder="Data Two"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputSourceOne" class="col-sm-4 col-form-label">Data Source 1</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control-plaintext" id="inputSourceOne" placeholder="Data Souce One"/>
                        </div>
                      </div>    
                      <div class="form-group row">
                        <label for="inputSourceTwo" class="col-sm-4 col-form-label">Data Source 2</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control-plaintext" id="inputSourceTwo" placeholder="Data Souce Two"/>
                        </div>
                      </div>  
                      <button style={{float:"left"}}
                      className="modelling_submit_model">SUBMIT DATA</button>             
                    </form>
                  </div>
                  <div id="menu2" className="tab-pane fade">
                    
                  <div className="panel-group" id="accordin">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordin" href="#col1">AWS DATALAKE</a>
                        </h4>
                      </div>
                      <div id="col1" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <form >
                            <div className="form-group">
                              <label for="comment">Comment:</label>
                              <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <button type="button"  class="btn btn-default pull-right">SAVE DATA</button>
                          </form>
                       
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordin" href="#col2">AZURE DATALAKE</a>
                        </h4>
                      </div>
                      <div id="col2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <form>
                            <div className="form-group">
                              <label for="comment">Comment:</label>
                              <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <button type="button"  class="btn btn-default pull-right">SAVE DATA</button>
                          </form>
                       
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordin" href="#col3">SOME DATALAKE</a>
                        </h4>
                      </div>
                      <div id="col3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <form>
                            <div className="form-group">
                              <label for="comment">Comment:</label>
                              <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <button type="button"  class="btn btn-default pull-right">SAVE DATA</button>
                          </form>
                       
                        </div>
                      </div>
                    </div>
                  </div> 
                  
                  </div>
            </div>
    </div>
    </>
    );
  }
}

export default Dashboard;
