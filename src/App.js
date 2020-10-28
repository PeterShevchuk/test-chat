import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { navigation } from "./vars";

import Home from "./Containers/Home/Home";
import Login from "./Containers/Sing/Login";
import Registration from "./Containers/Sing/Registration";
import Message from "./Components/Message/Message";
import { setWindowSize } from "./Redux/Slice";

import "./App.css";

function App() {
  const { token } = useSelector((state) => state.session);
  const RouteAuth = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to={{ pathname: navigation.redirect, state: { from: props.location } }} />)} />;
  const RouteNoAuth = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (!token ? <Component {...props} /> : <Redirect to={{ pathname: navigation.home, state: { from: props.location } }} />)} />;
  const { windowSize } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  window.onresize = ({ target }) => {
    dispatch(setWindowSize(target.innerWidth));
  };
  return (
    <Switch>
      <RouteAuth path={navigation.home} component={Home} />
      {windowSize < 756 && <RouteAuth path={navigation.home + "/:id"} component={Message} />}
      <RouteNoAuth path={navigation.reg} component={Registration} />
      <RouteNoAuth path={navigation.login} component={Login} />
      <Redirect to={navigation.redirect} />
    </Switch>
  );
}

export default App;
