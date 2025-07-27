import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traduction
import fr from "./locales/fr.json";

const resources = {
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector) // <-- ajoute le détecteur de langue
  .use(initReactI18next) // passe à react-i18next
  .init({
    resources,
    fallbackLng: "fr", // langue de repli si la détection échoue
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // options facultatives de configuration
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // stocker la langue détectée dans un cookie
    },
  });

export default i18n;
