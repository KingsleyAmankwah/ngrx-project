import { Injectable, inject } from '@angular/core';
import { environment } from '../../env/env-dev';
import { HttpClient } from '@angular/common/http';
import { LoginPayload, RegisterPayload, User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseURL = `${environment.API_URL}/auth`;

  public register(registerPayload: RegisterPayload) {
    return this.http.post<User>(`${this.baseURL}/register`, registerPayload);
  }

  public login(loginPayload: LoginPayload) {
    return this.http.post<User>(`${this.baseURL}/login`, loginPayload);
  }
}
