"use client";
import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getMessages, locales } from "./i18n";

// Tạo context để lưu trạng thái locale
const LocaleContext = createContext();

export function I18nProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const urlLocale = searchParams.get("lang") || "en";
    changeLanguage(urlLocale);
  }, [searchParams]);

  const changeLanguage = async (newLocale) => {
    if (!locales.includes(newLocale)) return;
    const newMessages = await getMessages(newLocale);
    setLocale(newLocale);
    setMessages(newMessages);
    router.push(`${pathname}?lang=${newLocale}`, { scroll: false });
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLanguage }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

// Hook để sử dụng trong component
export function useI18n() {
  return useContext(LocaleContext);
}
