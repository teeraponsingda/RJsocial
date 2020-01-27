import React from 'react';
import './App.css';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import{ Switch,Route } from 'react-router-dom';
 
    
  
function App() {
  return (
    <Switch>
      <Route exact path="/" component ={Login} />
      <Route path="/Admin" component={AdminPage}/>>
    </Switch>
  );
}

export default App;
