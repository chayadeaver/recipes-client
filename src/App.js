import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { NoMatch } from './components/NoMatch'
import Login from './components/Login'
import Logout from './components/Logout'
// import { Layout } from './components/Layout'
// import { NavBar } from './components/NavBar'
// import { Jumbotron} from './components/Jumbotron'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    return (
      this.props.currentUser ? <Logout /> : <Login />
      // <React.Fragment>
      //   <NavBar />
      //   <Jumbotron />
        
      //   <Layout>
      //     <Router>
      //       <Switch>
      //         <Route exact path="/" component={Home} />
      //         <Route path="/logout" component={Logout} />
      //         <Route path="/login" component={Login} />
      //         <Route component={NoMatch} />
              
      //         {/* <Route path="/signup" component={Signup} /> */}
      //       </Switch>
      //     </Router>
      //   </Layout>
      // </React.Fragment>
    );
  }
  
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
