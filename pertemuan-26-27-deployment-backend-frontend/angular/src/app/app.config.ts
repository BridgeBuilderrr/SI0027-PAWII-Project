// TODO 4: lengkapi pendaftaran HttpClient & interceptor di bawah ini.

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// TODO: tambahkan import { provideHttpClient, withInterceptors } from '@angular/common/http';
// TODO: tambahkan import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // TODO: tambahkan provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
