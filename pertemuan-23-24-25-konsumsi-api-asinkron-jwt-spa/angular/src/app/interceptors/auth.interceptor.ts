// Mini Project - Pertemuan 23-24-25: Menyertakan token JWT pada setiap request
// TODO 3: lengkapi interceptor di bawah ini.

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: baca token dari localStorage.getItem('token')
  // TODO: jika tidak ada token, return next(req) apa adanya
  // TODO: jika ada token, return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }))
  return next(req);
};
