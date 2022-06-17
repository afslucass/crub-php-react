import { AnyAction } from "redux";
import { ADDRESS, CLIENTS_LIST, CLIENT_DETAILS } from "../types/actionTypes";
import { ClientReducer } from "../types/reducers";

const initialState: ClientReducer = {
  clientList: [],
  clientDetails: null,
  address: null,
};

const clientReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CLIENTS_LIST:
      state = {
        ...state,
        clientList: action.payload,
      };
      return state;

    case CLIENT_DETAILS:
      state = {
        ...state,
        clientDetails: action.payload,
      };
      return state;

    case ADDRESS:
      state = {
        ...state,
        address: action.payload,
      };
      return state;

    default:
      return state;
  }
};

export default clientReducer;
