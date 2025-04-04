import * as monaco from "monaco-editor";

export const getMonacoLanguages = () => {
  return monaco.languages.getLanguages().map((lang) => ({
    id: lang.id,
    name: lang.aliases?.[0] || lang.id,
  }));
};