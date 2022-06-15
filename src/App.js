import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./pages/About";
import Home from './pages/Home'
import Custom from './pages/Custom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Footer from './Footer'
import Commercial from './pages/Commercial'
import Remodel from './pages/Remodel'
import Projects from './pages/Projects'
import House from './pages/House'
function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div id="logo-container">
          <img
            id="logo"
            src="https://static1.squarespace.com/static/5f40525348e0fd517adda680/t/5f6b53da294e19611c6658b9/1598460349212/?format=1500w"
            alt="logo"
          />
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Custom">
            <Custom />
          </Route>
          <Route path="/Commercial">
            <Commercial />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path='/Remodels'>
            <Remodel />
          </Route>
          <Route path='/House'>
            <House />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
