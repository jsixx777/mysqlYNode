import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';
//import { StripeProvider, Elements } from 'react-stripe-elements';
import Stripe from './components/public/Strip';


import "./scss/app";
//import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/shared/Navbar";
import AllBlogs from './components/public/AllBlogs';
import SingleBlog from './components/public/SingleBlog';
import Home from './components/public/Home';

export default class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
      <>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/blogs" component={AllBlogs} />
            <Route exact path="/single/:id" component={SingleBlog} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/donate" component={Stripe} />
          </Switch>     
        </>
      </BrowserRouter>
    );
  }
}


interface IAppProps {}
interface IAppState {}
