import React from 'react';
import { Switch ,Route} from 'react-router-dom'
import './App.css';
import home from './home'
import calculation from './calculation'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={home}></Route>
        <Route exact path='/calculation' component={calculation}></Route>
      </Switch>
    </div>
  );
}

export default App;
