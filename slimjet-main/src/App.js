import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";



function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Contact} path="/contact" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </BrowserRouter>
    <div className="page-container">
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
