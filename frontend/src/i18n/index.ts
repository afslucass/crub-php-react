/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./pt-br.json";

i18n.use(initReactI18next).init({
  resources: { pt },
  lng: "pt",
  ns: "TRANSLATE",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
