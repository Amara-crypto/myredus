import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home';
import store from './components/store';
import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path = "/Cart" component={Cart}/>
        </Switch>
        </BrowserRouter>
      </div>
      </Provider>

    )
  }
}
  
export default App;
