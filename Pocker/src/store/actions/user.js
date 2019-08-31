import { LOGIN_USER } from "../constants/user";
import Axios from "axios";
export const requestLoginUSer = (username, password, callback) => {
  return dispatch => {
    Axios({
      //default
      method: "POST",
      url: `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=trunghieu88888&MatKhau=1233455`
    })
      .then(res => {
        if (typeof res.data !== "string") {
          alert("Đăng Nhập thành công");
          localStorage.setItem("userLogin", JSON.stringify(res.data));
          dispatch(actLoginUser(res.data));
          callback();
        } else {
          alert("Tài khoản hoặc mật khẩu sai gòi.");
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const actLoginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user
  };
};
