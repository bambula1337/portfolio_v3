export interface SessionLanguage {
  languageCode: string,
}
export interface PlatformBackend {
  getSessionLanguage(): Promise<SessionLanguage>,
}
