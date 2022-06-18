import { AnyAction } from "redux";
import { LOGIN } from "../types/actionTypes";
import { AdminReducer } from "../types/reducers";

const initialState: AdminReducer = {
  name: null,
};

const adminReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        name: action.payload,
      };
      return state;

    default:
      return state;
  }
};

export default adminReducer;
