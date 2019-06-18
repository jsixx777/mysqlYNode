import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';

import "./scss/app";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/shared/Navbar";
//import AllBlogs from './components/public/AllBlogs;
//import SingleBlog from './components/public/'

export default class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
      <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AllBlogs} />
            <Route exact path="/single/id:" component={SingleBlog} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />

          </Switch>     
        </>
      </BrowserRouter>
    );
  }
}


interface IAppProps {}
interface IAppState {}
