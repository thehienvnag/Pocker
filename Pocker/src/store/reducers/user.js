import { LOGIN_USER } from "../constants/user";

let initalState = {
  userProfile: {}
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
      case LOGIN_USER: {
          const updateState = {...state};
          updateState.userProfile = action.payload;
          return updateState;
      }
      default: return state;
  }
};
export default userReducer;
