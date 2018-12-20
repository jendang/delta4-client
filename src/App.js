import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import Widget from './components/chatapp/Widget';
import ProjectsListContainer from './components/projects/ProjectsListContainer';
import FixedMenuLayout from './components/FixLayout';
import ProjectDetails from './components/projects/ProjectDetails';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
          <FixedMenuLayout />

          </header>
          {/* <nav>
            <TopBar />
          </nav> */}
          <main style={{marginTop:75}}>
            {/* <Route exact path="/test" component={FixedMenuLayout} /> */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/projects" component={ProjectsListContainer} />
            <Route exact path="/projects/:id" component={Widget} />
            <Route exact path="/projects/:id" component={ProjectDetails} />
            {/* <Route exact path="/" render={ () => <Redirect to="/login" /> } /> */}
          </main>
        </div>

         {/* </div>  */}
      </Router>
     
    
    )
  }
}
export default App
