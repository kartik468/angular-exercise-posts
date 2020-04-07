import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId: number): Observable<User> {
    // first two examples return [{<user>}]
    // return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {
    //   params: new HttpParams({ fromObject: { id: userId + '' } })
    // });
    // return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {
    //   params: new HttpParams().set('id', userId + '')
    // });
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/posts/${user.id}`, user);
  }
}
