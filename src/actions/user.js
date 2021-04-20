import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  REQUEST_REGISTER,
} from "../constants/user";

export const requestLogin = (user) => ({
  type: REQUEST_LOGIN,
  payload: user,
});

export const loginSuccess = (payload) => ({
  type: SUCCESS_LOGIN,
  payload,
});

export const loginFailed = (error) => ({
  type: FAILED_LOGIN,
  payload: error,
});

export const requestRegister = (user) => ({
  type: REQUEST_REGISTER,
  payload: user,
});
