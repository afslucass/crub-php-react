import Masker from "vanilla-masker";

export const MaskCPF = (cpf: string) => {
  return Masker.toPattern(cpf, "999.999.999-99");
};

export const MaskRG = (rg: string) => {
  return Masker.toPattern(rg, "999.999.999.999.999");
};

export const MaskCellphone = (phone: string) => {
  return Masker.toPattern(phone, "(99) 9 9999-9999");
};

export const MaskCEP = (cep: string) => {
  return Masker.toPattern(cep, "99999-999");
};

export const unMask = (value: string) => {
  return value
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll(" ", "")
    .replaceAll("(", "")
    .replaceAll(")", "");
};
