import { AppDispatch } from "../reducers/store";
import { Client } from "../types/models";

export const getClients = () => (dispatch: AppDispatch) => {};
export const getClientDetails = (id: string) => (dispatch: AppDispatch) => {};
export const createClient = (client: Client) => (dispatch: AppDispatch) => {};
export const putClient =
  (id: string, client: Client) => (dispatch: AppDispatch) => {};
export const deleteClient = (id: string) => (dispatch: AppDispatch) => {};
