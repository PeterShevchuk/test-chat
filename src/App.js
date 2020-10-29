import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { navigation } from "./vars";

import Home from "./Containers/Home/Home";
import Login from "./Containers/Sing/Login";
import Registration from "./Containers/Sing/Registration";
import { setWindowSize } from "./Redux/Slice";

import "./App.css";

function App() {
  const { token } = useSelector((state) => state.session);
  const RouteAuth = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to={{ pathname: navigation.redirect, state: { from: props.location } }} />)} />;
  const RouteNoAuth = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (!token ? <Component {...props} /> : <Redirect to={{ pathname: navigation.home, state: { from: props.location } }} />)} />;
  const dispatch = useDispatch();
  useEffect(() => {
    window.onresize = ({ target }) => {
      dispatch(setWindowSize(target.innerWidth));
    };
  });
  return (
    <Switch>
      <RouteAuth path={navigation.home} component={Home} />
      <RouteNoAuth path={navigation.reg} component={Registration} />
      <RouteNoAuth path={navigation.login} component={Login} />
      <Redirect to={navigation.redirect} />
    </Switch>
  );
}

export default App;
