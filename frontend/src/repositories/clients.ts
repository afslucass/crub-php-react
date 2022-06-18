import { Client } from "../types/models";
import Api from "../utils/request";

const ClientsAPI = {
  getClients: async () => {
    const data = await Api.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/get`
    );

    return data;
  },
  getClientDetails: async (id: string) => {
    const data = await Api.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/detail?id=${id}`
    );

    return data;
  },
  createClient: async (client: Client) => {
    await Api.request(
      "POST",
      `${process.env.REACT_APP_API_URL}/create`,
      client
    );
  },
  putClient: async (id: string, client: Client) => {
    await Api.request("POST", `${process.env.REACT_APP_API_URL}/edit`, {
      ...client,
      id,
    });
  },
  deleteClient: async (id: string) => {
    await Api.request(
      "DELETE",
      `${process.env.REACT_APP_API_URL}/delete?id=${id}`
    );
  },
  getAddressByCEP: async (cep: string) => {
    const call = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await call.json();

    return data;
  },
};

export default ClientsAPI;
