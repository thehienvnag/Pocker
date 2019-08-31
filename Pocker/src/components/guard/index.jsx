import React from "react";
import { Route, Redirect } from "react-router-dom";

const LoginGuard = ({ component: Component, path }) => {
  return (
    //    <Route to={path} component={Component} />
    <Route
      to={path}
      render={routeProps => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routeProps} />;
        }
        alert("Vui lòng đăng nhập");
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default LoginGuard;
