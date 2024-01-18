export type LanguageType = "ru" | "be" | "uk" | "en" | "lt" | "pl";

export const acceptedLanguages: Array<LanguageType> = [
  "ru",
  "be",
  "uk",
  "en",
  "lt",
  "pl",
];
class LanguageController {
  selectedLanguage: LanguageType;
  constructor() {
    this.selectedLanguage = "en";
  }
  setLanguage = (lang: LanguageType) => {
    this.selectedLanguage = lang;
  };
}
export const languageController = new LanguageController();
