import { Address, Client } from "./models";

export type ClientReducer = {
  clientList: Client[];
  clientDetails: Client | null;
  address: Address | null;
};

export type AdminReducer = {
  name: string | null;
};
