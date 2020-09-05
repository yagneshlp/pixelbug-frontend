import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Members from './components/Members';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
    <Router>
        <div className="App">
            <Navbar/>
            <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/members" exact component={Members}></Route>
            {/* <Route path="/members/:id"  component={About}></Route> Future implementation */} 
            <Route path="/aurora" exact component={About}></Route>
            <Route path="/contact" exact component={Home}></Route>
            </Switch>
        </div>
    </Router>
    )
  }
}


export default App;
