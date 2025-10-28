import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const loc = new I18n({
  en: require("./en.json"),
  tr: require("./tr.json"),
});

loc.locale = getLocales()[0].languageCode ?? "tr";

export default loc;
