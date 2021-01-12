import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Services';
import Room from "./Room";
import Thingstodo from './Thingstodo';
import Gallery from './Gallery';
import Footer from './Footer';
// import { Switch, Route, Redirect } from 'react-router-dom';
import Nevbar from './Nevbar';


const App = () => {
  return (<>
    <Nevbar />
    {/* <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/contact" component={Home} />
      <Route exact path="/service" component={Home} />
      <Redirect to='/' />
    </Switch> */}
    <Home/>
    <About/>
    <Room/>
    <Service/>
    <Gallery/>
    <Thingstodo/>
    <Contact/>
    <Footer/>
    

  </>);
}

export default App;
