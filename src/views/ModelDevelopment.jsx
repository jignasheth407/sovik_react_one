import React, { Component} from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import PieChart from "components/PieChart/PieChart";
import Modal from 'components/NewTable/Modal';
import List from 'components/NewTable/List'


class ModelDevelopment extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          contrione: "12.9",
          channel:"Traditional Media",
          contritwo: "11.4",
          change: "-"
        }, {
          contrione: "3.7",
          channel:"National TV",
          contritwo: "0.0",
          change: "-"
        }, {
          contrione: "5.2",
          channel:"Local TV",
          contritwo: "6.8",
          change: "-"
        }, {
          contrione: "0.3",
          channel:"Hispanic Local TV",
          contritwo: "0.9",
          change: "-"
        },{
          contrione: "2.4",
          channel:"Print",
          contritwo: "4.2",
          change: "-"
        },{
          contrione: "0.7",
          channel:"Radio",
          contritwo: "1.5",
          change: "-"
        },{
          contrione: "0.6",
          channel:"Out Of Home",
          contritwo: "2.8",
          change: "-"
        },{
          contrione: "2.4",
          channel:"Digital Media",
          contritwo: "4.1",
          change: "-"
        },{
          contrione: "0.5",
          channel:"Video",
          contritwo: "0.9",
          change: "-"
        },{
          contrione: "1.7",
          channel:"Digital Audio",
          contritwo: "5.2",
          change: "-"
        },{
          contrione: "0.2",
          channel:"Social Media",
          contritwo: "3.5",
          change: "-"
        },{
          contrione: "1.0",
          channel:"Facebook",
          contritwo: "1.6",
          change: "-"
        },{
          contrione: "0.5",
          channel:"Instagram",
          contritwo: "3.3",
          change: "-"
        },{
          contrione: "0.4",
          channel:"Twitter",
          contritwo: "1.6",
          change: "-"
        },{
          contrione: "0.1",
          channel:"Paid Media",
          contritwo: "2.5",
          change: "-"
        },{
          contrione: "1.9",
          channel:"Organic Social",
          contritwo: "0.3",
          change: "-"
        },
      ]
    }
  }

  submitModelone() {
    alert("Submit model is clicked")
  }

  submitModeltwo(){
    alert("submit model two is clicked")
  }
  saveModel() {
    alert("Save model is clicked")
  }
  
  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  
  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

//   handleChange(item){
//     this.setState({[e.target.change]: e.target.value}, function() {
//         this.setState({changeIn: this.state.contrione - this.state.contritwo});
//     });
//  }

  render () {
   
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <>
        <tr key={index}>
          <td>{item.contrione}%</td>
          <td>{item.channel}</td>
          <td>{item.contritwo}%</td>
          <td>{item.change}</td>
          <td>
            <button className="btn_chart" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>Edit</button> {" "}
          </td>
        </tr> 
        </>
      )
    });

    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    
    return (
      <div id="menu3" className="tab-pane fade">
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                  MODEL PARAMETERS</a>
              </h4>
            </div>
          <div id="collapse7" className="panel-collapse collapse">
            
              
            <div className="row">
          
                <div className="col-md-8 col-sm-8">
                  <div class="col-sm-8 ">
                    <input type="text" class="form-control-plaintext" placeholder="MODEL SOURCE"/>
                  </div>
                  <div class="col-sm-8">
                    <input type="text" class="form-control-plaintext" placeholder="PARAMETER 1"/>
                  </div>
                  <div class="col-sm-8">
                    <input type="text" class="form-control-plaintext" placeholder="PARAMETER 2"/>
                    <div>
                    <button className="submit_model_one" onClick={()=> this.submitModelone()}>SUBMIT MODEL</button>
                    </div>
                    
                  </div>

                </div>
                
              <div className="col-md-7 col-sm-7">
                  
                <div className="text-center">
                  <h4><u><b>Total Contribution</b></u></h4>
                    <p className="modelling__desc">Short-Term Marketing Impact</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">                    
                      <table className="table text-center table-bordered chart_table">
                        <thead >
                          <tr>
                            <th scope="col">%Contribution</th>
                            <th scope="col">Media Channel</th>
                            <th scope="col">%Contribution</th>
                            <th scope="col">Change</th>
                            <th scope="col">Modify</th>
                          </tr>
                        </thead>
                        <tbody>
                          {brochure}
                        </tbody>
                      </table>
                      <div >
                        <button className="modelling_submit_model" onClick={()=> this.submitModeltwo()}>SUBMIT MODEL</button>   
                      </div> 
                      {/* modal here */}
                      <Modal
                        contrione={modalData.contrione}
                        channel={modalData.channel}
                        contritwo={modalData.contritwo}
                        change={modalData.change}
                        saveModalDetails={this.saveModalDetails}
                      />
                    </div>
                </div>
                
              </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="text-center">
                          <h4 className="modeliing__header"><b><u>CY 2019</u></b></h4>
                          <div className="modelling_pie_desc">
                            <span>Total Contribution</span><br/>
                            <span>Sales: $500 MM(-0.9%)</span><br/>
                            <span>Media Spend: $500 MM(-0.9%)</span><br/>
                            <span>Media Driven Sales: $500 MM(-0.9%)</span>
                          </div>
                          <h5 className="modelling__dollar"><u>Dollar Contribution</u></h5>
                      </div>
                      {/* pie chart here */}
                      <div className="modelling__pie">
                        <PieChart />
                      </div>
                    </div>
            </div>
          </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                          OPTIMIZATION PARAMETERS</a>
                      </h4>
                    </div>
                      <div id="collapse9" className="panel-collapse collapse ">
                        <div className="row">
                          <div className="col-md-7 col-sm-7">
                            Optimization parameteters goes here
                          </div>
                        </div>
                      </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                      TEST MODEL OUTPUT</a>
                    </h4>
                  </div>
                    <div id="collapse10" className="panel-collapse collapse ">
                      
                       
                    {/* The table when saved to data base after clicking the save model in model parameter will be shown here. */}
                    <List />
                        
                      
                    </div>
                </div>
                <button className="modelling_save_model" onClick={()=> this.saveModel()}>SAVE MODEL</button>  
              </div>
            </div>      
          </div>
    )
  }
 
      
}   
  
export default ModelDevelopment;