export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'hi','te'],
} as const

export type Locale = (typeof i18n)['locales'][number]
