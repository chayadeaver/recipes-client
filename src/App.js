import React from 'react';
import './App.scss'
import './App.css'
import NavBar  from './components/NavBar'
import Home  from './components/Home'
import RecipeCard  from './components/RecipeCard'
import Login  from './components/sessions/Login'
import NoMatch  from './components/NoMatch'
import Signup  from './components/sessions/Signup'
import MyRecipes  from './components/containers/MyRecipes'
import RecipeForm  from './components/containers/RecipeForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './components/containers/MainContainer';
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'
import { getAllRecipes } from './actions/myRecipes';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getAllRecipes()
  }

  render () {

    const { loggedIn, allRecipes } = this.props
    return (
      <div className="App">
        <MainContainer />
        { loggedIn ? <NavBar location={this.props.location}/> : <h2>To add recipes, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h2> }
          
          <Switch>
            <Route exact path="/signup" render={({ history }) => <Signup history={ history }/>} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/no-match" component={NoMatch} />
            <Route exact path ="/myrecipes" component={MyRecipes}/>
            <Route exact path ="/recipes/new" component={RecipeForm}/>
            <Route exact path ="/recipes/:id" render={props => {
                const recipe = allRecipes.find(recipe => recipe.id === props.match.params.id)
                console.log(recipe)
                return <RecipeCard recipe={recipe} {...props}/>
              }
            }/>
            <Route exact path ="/recipes/:id/edit" render={props => {
                const recipe = allRecipes.find(recipe => recipe.id === props.match.params.id)
                console.log(recipe)
                return <RecipeForm recipe={recipe} {...props}/>
              }
            }/>
            <Route exact path="/" component={Home} />
            <Redirect to="/no-match" />

          </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    // recipes: state.myRecipes,
    allRecipes: state.myRecipes.allRecipes
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getAllRecipes })(App));
