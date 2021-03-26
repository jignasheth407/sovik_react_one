import React from 'react';
import PieChart from 'components/PieChart/PieChart'

class List extends React.Component {
  constructor(props) {
    super(props)
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

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.contrione}%</td>
          <td>{item.channel}</td>
          <td>{item.contritwo}%</td>
          <td>{item.change}</td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    
    return (
      <>
      <div className="row">      
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
            </tr>
         </thead>
          <tbody>
            {brochure}
          </tbody>
        </table>
        
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
          
            <div className="modelling__pie">
              <PieChart />
            </div>
          </div>
        </div>
      
      </>
    );
  }
}

export default List;