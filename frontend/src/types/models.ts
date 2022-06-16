export type Client = {
  id: string;
  name: string;
  bornAt: string;
  cpf: string;
  rg: string;
  address: Address[] | null;
};

export type Address = {
  id: string;
  clientId: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
};
