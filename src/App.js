import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home';
import store from './components/store';
import './App.css';
import { Provider } from 'react-redux';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <switch>
          <Route exact path ="/" component={Home}/>
          <Route path = "/cart" component={Cart}/>
        </switch>
        </BrowserRouter>
      </div>
      </Provider>

    )
  }
}
  
export default App;
