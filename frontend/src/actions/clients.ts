import { message } from "antd";
import { AppDispatch } from "../reducers/store";
import ClientsAPI from "../repositories/clients";
import { ADDRESS } from "../types/actionTypes";
import { Client } from "../types/models";

export const getClients = () => (dispatch: AppDispatch) => {};
export const getClientDetails = (id: string) => (dispatch: AppDispatch) => {};
export const createClient = (client: Client) => (dispatch: AppDispatch) => {};
export const putClient =
  (id: string, client: Client) => (dispatch: AppDispatch) => {};
export const deleteClient = (id: string) => (dispatch: AppDispatch) => {};
export const getAddressByCEP =
  (cep: string) => async (dispatch: AppDispatch) => {
    try {
      const payload = await ClientsAPI.getAddressByCEP(cep);

      dispatch({
        type: ADDRESS,
        payload,
      });
    } catch (err) {
      if (err instanceof Error) {
        message.error("Ocorreu um erro ao buscar o cep.");
      }
    }
  };
