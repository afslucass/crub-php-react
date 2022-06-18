import { message } from "antd";
import { AppDispatch } from "../reducers/store";
import ClientsAPI from "../repositories/clients";
import { ADDRESS, CLIENTS_LIST, CLIENT_DETAILS } from "../types/actionTypes";
import { Client } from "../types/models";

export const getClients = () => async (dispatch: AppDispatch) => {
  try {
    const payload = await ClientsAPI.getClients();

    dispatch({
      type: CLIENTS_LIST,
      payload,
    });
  } catch (err) {
    if (err instanceof Error) {
      message.error("Ocorreu um erro ao buscar do lado do servidor.");
    }
  }
};
export const getClientDetails =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const payload = await ClientsAPI.getClientDetails(id);

      dispatch({
        type: CLIENT_DETAILS,
        payload,
      });
    } catch (err) {
      if (err instanceof Error) {
        message.error("Ocorreu um erro ao buscar do lado do servidor.");
      }
    }
  };
export const createClient =
  (client: Client) => async (dispatch: AppDispatch) => {
    try {
      await ClientsAPI.createClient(client);

      message.success("Cliente criado com sucesso.");
    } catch (err) {
      if (err instanceof Error) {
        message.error("Ocorreu um erro ao buscar do lado do servidor.");
      }
    }
  };
export const putClient =
  (id: string, client: Client) => async (dispatch: AppDispatch) => {
    try {
      await ClientsAPI.putClient(id, client);

      message.success("Cliente alterado com sucesso.");
    } catch (err) {
      if (err instanceof Error) {
        message.error("Ocorreu um erro ao buscar do lado do servidor.");
      }
    }
  };
export const deleteClient = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await ClientsAPI.deleteClient(id);
    dispatch(getClients());

    message.warn("Cliente removido com sucesso.");
  } catch (err) {
    if (err instanceof Error) {
      message.error(err.message);
    }
  }
};
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
