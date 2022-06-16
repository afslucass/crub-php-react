export type Client = {
  id: string | null;
  name: string | null;
  cellphone: string | null;
  bornAt: string | moment.Moment | null;
  cpf: string | null;
  rg: string | null;
  address: Address[] | null;
};

export type Address = {
  id: string;
  clientId: string;
  cep: string | null;
  logradouro: string | null;
  complemento: string | null;
  bairro: string | null;
  localidade: string | null;
};
