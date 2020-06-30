import React from 'react';
import './App.css'
import NavBar  from './components/NavBar'
import Home  from './components/Home'
import Login  from './components/Login'
import Logout  from './components/Logout'
import Signup  from './components/Signup'
import MyRecipes  from './components/MyRecipes'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const { loggedIn } = this.props
    debugger
    return (
      <div className="App">
        <NavBar />
        { loggedIn ? <Logout history={this.props.history}/> : null}
        <MainContainer />
          <Switch>
            <Route exact path="/" render={(props) => loggedIn ? <MyRecipes {...props}/> : <Home {...props}/>} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" render={(props) => <Logout {...props}/>} />
            <Route exact path ="/my-recipes" component={MyRecipes}/>
          </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
