import React from 'react';
import './App.css'
import NavBar  from './components/NavBar'
import Login  from './components/Login'
import Signup  from './components/Signup'
import MyRecipes  from './components/MyRecipes'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './components/MainContainer';
import { Route } from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path ="/my-recipes" component={MyRecipes}/>
      </div>
    );
  }
  
}


export default connect(null, { getCurrentUser })(App);
