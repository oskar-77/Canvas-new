export type UiLanguage = "zh" | "en" | "ar";

const UI_LANG_STORAGE_KEY = "CanvasAnvil-ui-lang-v1";

export function getUiLanguage(): UiLanguage {
  if (typeof window === "undefined") return "en";
  const raw = String(localStorage.getItem(UI_LANG_STORAGE_KEY) || "").trim().toLowerCase();
  if (raw === "en") return "en";
  if (raw === "zh") return "zh";
  if (raw === "ar") return "ar";
  return "en";
}

export function setUiLanguage(lang: UiLanguage) {
  if (typeof window === "undefined") return;
  localStorage.setItem(UI_LANG_STORAGE_KEY, lang);
  try {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : lang === "ar" ? "ar" : "en");
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  } catch {
  }
  try {
    window.dispatchEvent(new Event("ui-language-changed"));
  } catch {
  }
}

export function detectLanguageFromText(text: string): UiLanguage | null {
  const raw = String(text || "");
  if (/[\u4E00-\u9FFF]/.test(raw)) return "zh";
  if (/[\u0600-\u06FF]/.test(raw)) return "ar";
  if (/[A-Za-z]/.test(raw)) return "en";
  return null;
}

export function resolveResponseLanguage(args: { userText: string; uiLang: UiLanguage }): UiLanguage {
  return detectLanguageFromText(args.userText) || args.uiLang;
}
