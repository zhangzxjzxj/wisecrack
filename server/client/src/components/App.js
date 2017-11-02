import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Background from '../images/email.png';




import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

var sectionStyle = {
  backgroundImage:`url(${Background})`,
  backgroundSize: 'cover',
  height:'800px',
  width:'100%'
}

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return(
      <div style={ sectionStyle } className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};


export default connect(null, actions)(App);
