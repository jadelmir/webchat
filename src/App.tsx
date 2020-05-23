import React from 'react';
import './App.css';
import {Route , BrowserRouter as Router , Switch } from 'react-router-dom'

const Login = ()=>{
  return <h2>
    login
  </h2>
}
const Main = ()=>{
  return <h2>
    Main
  </h2>
}
const NotFound = ()=> <h1>Page Not Found</h1>
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Main} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
