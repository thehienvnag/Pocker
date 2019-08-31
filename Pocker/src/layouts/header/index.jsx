import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = ({ loginUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        POCKER
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "white" }}
              className="nav-link"
              to="/signup"
            >
              Đăng ký
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "white" }}
              className="nav-link"
              to="/signin"
            >
              Đăng nhập
            </NavLink>
          </li>
        </ul>
        <div>
          <p className="text-white m-0">
            Xin Chào, {loginUser && loginUser.TaiKhoan}
          </p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loginUser: state.user.userProfile
  };
};

export default connect(mapStateToProps)(Header);
