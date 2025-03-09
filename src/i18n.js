export const locales = ["en", "vi"];

export async function getMessages(locale) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    return (await import("./locales/en.json")).default;
  }
}
