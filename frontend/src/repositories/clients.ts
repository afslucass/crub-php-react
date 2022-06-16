import { Client } from "../types/models";

const ClientsAPI = {
  getClients: () => {},
  getClientDetails: (id: string) => {},
  createClient: (client: Client) => {},
  putClient: (id: string, client: Client) => {},
  deleteClient: (id: string) => {},
  getAddressByCEP: async (cep: string) => {
    const call = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await call.json();

    return data;
  },
};

export default ClientsAPI;
