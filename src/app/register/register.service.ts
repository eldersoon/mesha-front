import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  async create(payload: any) {
    const response = await this.http
      .post<any>(`${environment.api}register`, payload)
      .toPromise();
    return response;
  }

  async listRegisters() {
    const response = await this.http
      .get<any>(`${environment.api}registers`)
      .toPromise();
    return response;
  }

  async viewRegister(id: any) {
    const response = await this.http
      .get<any>(`${environment.api}register/${id}`)
      .toPromise();
    return response;
  }
}
