
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from 'components/CustomButton/CustomButton';
import AdminLayout from "layouts/Admin.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class Login extends Component {
    next(){
        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    <Redirect from="/" to="/admin/dashboard" />
                </Switch>
            </BrowserRouter>,document.getElementById("root")
            );
    }
  render() {
    return (
       <div className="col-md-offset-3 col-md-6 content" style={{position:"relative",top:"200px"}}>
           <form className="form-horizontal" action="#" style={{backgroundColor:"lightblue",padding:"30px",}}>
            <div className="form-group">
                <label className="control-label col-sm-2" for="email">Username:</label>
                <div className="col-sm-8">
                <input type="email" className="form-control" id="email" placeholder="Enter username"></input>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" for="pwd">Password:</label>
                <div className="col-sm-8">
                <input type="password" className="form-control" id="pwd" placeholder="Enter password"></input>
                </div>
            </div>
            
            <div className="form-group">
                <div className="col-sm-offset-4 col-sm-2">
                <Button bsStyle="primary" fill onClick={this.next}>Login</Button>
                </div>
            </div>
            </form>
        </div>
    );
  }
}

export default Login;
