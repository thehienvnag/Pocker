//import packages
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

//import components
import Header from "../layouts/header";
import Signup from "../screens/auth/signup";
import Signin from "../screens/auth/signin";
import Home from "../screens/home";
import { actLoginUser } from "../store/actions/user";
import LoginGuard from "../components/guard";
import GameBaiCao from "../screens/game";
class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main>
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <LoginGuard path="/home" component={Home} />
              <LoginGuard path="/game" component={GameBaiCao} />
              <Redirect to="/home" />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const user = localStorage.getItem("userLogin");
    if (user) {
      this.props.onLoadUserProfile(JSON.parse(user));
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadUserProfile: user => {
      dispatch(actLoginUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Layout);
