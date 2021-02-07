import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';

import ProductsPage from './Components/ProductsPage';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <Router>
    <div>
      
    <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/ProductsPage" exact>
          <ProductsPage />
        </Route>
        <Route path="/ContactPage" exact>
          <ContactPage />
        </Route>
      </Switch>
      
      <Footer />
    </div>
 

    
    </Router>

  );
}

export default App;
