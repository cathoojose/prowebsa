import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../Translations/en.json";
import fr from "../Translations/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
