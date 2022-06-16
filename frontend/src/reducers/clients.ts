import { CLIENTS_LIST, CLIENT_DETAILS } from "../types/actionTypes";
import { ClientReducer } from "../types/reducers";

const initialState: ClientReducer = {
  clientList: [],
  clientDetails: null,
};

const clientReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLIENTS_LIST:
      state = {
        ...state,
        clientList: action.payload,
      };
      break;

    case CLIENT_DETAILS:
      state = {
        ...state,
        clientDetails: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default clientReducer;
