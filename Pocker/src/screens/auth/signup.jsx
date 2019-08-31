import React, { Component } from "react";
import Axios from "axios";
class signup extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    let newUser = {
      TaiKhoan: "trunghieu88888",
      MatKhau: "1233455",
      Email: "dantr@gmail.com",
      SoDT: "12312312312",
      MaNhom: "GP01",
      MaLoaiNguoiDung: "KhachHang"
    };
    Axios({
      //default
      method: "POST",
      url: "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: newUser
    })
      .then(res => {
        //chuyển hướng về trang đăng nhập
        alert("Đăng ký thành công gòi.");
        this.props.history.push('/signin');
        // this.props.history.replace('/signin');
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h1 className="display-4">Đăng Ký</h1>
          <div className="form-group">
            <label>Tài Khoản</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Mật Khẩu</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Số ĐT</label>
            <input type="number" className="form-control" />
          </div>
          <button className="btn btn-success">Đăng Ký</button>
        </form>
      </div>
    );
  }
}

export default signup;
