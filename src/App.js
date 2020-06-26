import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { NoMatch } from './components/NoMatch'
import Login from './components/Login'
import { Layout } from './components/Layout'
import { NavBar } from './components/NavBar'
import { Jumbotron} from './components/Jumbotron'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />

              {/* <Route path="/signup" component={Signup} /> */}
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
  
}

export default App;
