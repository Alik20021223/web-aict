import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    returnObjects: true,
    saveMissing: true,
    backend: {
      projectId: "e9f035a5-3987-47c2-9201-3abcb4c20a80",
      apiKey: "7e2db199-4d48-43f9-845c-d19b57221119",
    },
  });
