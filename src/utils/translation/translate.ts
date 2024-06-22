import { STRINGS } from "./strings";

export const translate = (key: string): string | null => {
  const language = navigator.language;
  const string = STRINGS[key]?.[language] ?? STRINGS[key]?.['en-EN'] ?? null;
  return string;
}