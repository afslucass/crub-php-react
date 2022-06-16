import { Client } from "./models";

export type ClientReducer = {
  clientList: Client[];
  clientDetails: Client | null;
};
