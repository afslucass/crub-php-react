import { message } from "antd";
import { AppDispatch } from "../reducers/store";
import AdminAPI from "../repositories/admin";
import { LOGIN } from "../types/actionTypes";
import translate from "../utils/translate";

export const login =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const payload = await AdminAPI.login(login, password);

      dispatch({
        type: LOGIN,
        payload: login,
      });

      localStorage.setItem("token", payload.token);

      window.location.assign("/clients");
    } catch (err) {
      if (err instanceof Error) {
        message.error(translate(`MESSAGES.${err.message}`));
      }
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  localStorage.clear();

  dispatch({
    type: LOGIN,
    payload: null,
  });

  window.location.assign("/");
};
