import React from 'react';
import './App.css'
import NavBar  from './components/NavBar'
import Home  from './components/Home'
import Login  from './components/Login'
import Logout  from './components/Logout'
import Signup  from './components/Signup'
import MyRecipes  from './components/MyRecipes'
import NewRecipeForm  from './components/NewRecipeForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter, Link } from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <MainContainer />
        { loggedIn ? <NavBar location={this.props.location}/> : <Home /> }
          <Switch>
            <Route exact path="/signup" render={({ history }) => <Signup history={ history }/>} />
            <Route exact path="/login" component={Login} />
            <Route exact path ="/myrecipes" component={MyRecipes}/>
            <Route exact path ="/recipes/new" component={NewRecipeForm}/>
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
