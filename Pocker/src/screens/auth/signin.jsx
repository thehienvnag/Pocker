import React, { Component } from "react";
import { connect } from "react-redux";

import Axios from "axios";
import { actLoginUser, requestLoginUSer } from "../../store/actions/user";
class signin extends Component {
  hanldeOnSubmit = e => {
    e.preventDefault();
    this.props.onLogin(null, null, () => {
      this.props.history.push("/home");
    });
  };
  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.hanldeOnSubmit}>
          <h1 className="display-4">Đăng Nhập</h1>
          <div className="form-group">
            <label>Tài Khoản</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Mật Khẩu</label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-success">Đăng nhập</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password, callback) => {
      dispatch(requestLoginUSer(username, password, callback));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(signin);
