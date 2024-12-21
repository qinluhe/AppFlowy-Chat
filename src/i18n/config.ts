import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en.json';
import resourcesToBackend from 'i18next-resources-to-backend';
import { createContext } from 'react';

let chatI18n: typeof i18n | null = null;

export function initI18n() {
  chatI18n = i18n.createInstance();

  chatI18n
    .use(
      resourcesToBackend((language: string) => {
        return import(`../locales/${language}.json`);
      })
    )
    .use(initReactI18next)
    .init({
      resources: { en: { chat: en } },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      keySeparator: '.',
      cache: {
        enabled: true,
        prefix: `i18next_chat_`,
      },
    });
  return chatI18n;
}

export function getI18n() {
  return chatI18n;
}

export const ChatI18nContext = createContext<typeof i18n | null>(null);
