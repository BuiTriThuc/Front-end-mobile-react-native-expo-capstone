import { useReducer } from "react";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../constants/userConstants";

export const userReducers =   (state = { user: {}, userProfile: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return { loading: true, isAuthenticated: false };

    // Gửi login request, chưa đăng nhập nên authen = false

    case LOGIN_SUCCESS: // login thành công authen = true. action.payload là data của th Usẻr
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userProfile: action.payload,
      };
    case LOGIN_FAIL: //login fail authen = false vì đăng nhập k thành công. trả về eror action.payload.message (của error BE set)
      return {
        loading: false,
        isAuthenticated: flase,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        userProfile: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
