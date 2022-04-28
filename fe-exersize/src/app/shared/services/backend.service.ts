
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Types } from '../models/types';
import { Files } from '../models/files';

@Injectable({ providedIn: 'root' })
export class BackEndService {
    private readonly apiUrl ='http://localhost:3001';

    constructor(private http: HttpClient) {}

    getUsers() {
      return this.http.get<Users[]>(this.apiUrl + '/Users');
    }

    getTypes() {
      return this.http.get<Types[]>(this.apiUrl + '/Types');
    }

    getFiles() {
      return this.http.get<Files[]>(this.apiUrl + '/Files');
    }

}
