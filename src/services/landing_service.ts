import { PlatformBackend, SessionLanguage } from '@/models/PlatformBackend';

export default class LandingService {
  platformApi: PlatformBackend;

  constructor(platformAPI: PlatformBackend) {
    this.platformApi = platformAPI;
  }

  getCurrentLanguage(): Promise<SessionLanguage> {
    return this.platformApi.getSessionLanguage();
  }
}
