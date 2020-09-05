import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Members from './components/Members';
import Contact from './components/Contact';
import Aurora from './components/Aurora';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
    <Router>
        <div className="App">
            <Navbar/>
            <Switch>
           
            <Route path="/about" exact component={About}></Route>
            <Route path="/members" exact component={Members}></Route>
            <Route path="/gallery" exact component={Gallery}></Route>
            <Route path="/gallery/videos" exact component={Gallery}></Route>
            <Route path="/gallery/photos/fests" exact component={Gallery}></Route>
            <Route path="/gallery/photos/category" exact component={Gallery}></Route>
            {/* <Route path="/members/:id"  component={About}></Route> Future implementation */} 
            <Route path="/aurora" exact component={Aurora}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/"  component={Home}></Route>
            </Switch>
        </div>
    </Router>
    )
  }
}


export default App;
