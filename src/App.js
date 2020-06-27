import React from 'react';
import './App.css'
import NavBar  from './components/NavBar'
// import { Layout } from './components/Layout'
// import { Jumbotron} from './components/Jumbotron'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './components/MainContainer';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    return (
      <div className="App">
          <MainContainer />
          <NavBar />
          
          {/* <Jumbotron /> */}
          
          {/* <Layout /> */}
      </div>
    );
  }
  
}


export default connect(null, { getCurrentUser })(App);
