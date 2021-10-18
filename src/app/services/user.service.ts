import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../User'

/**
 * @description:
 * service for comunicate with server via Rest API for all project
 */

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private apiUrl = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`
    return this.http.delete<User>(url)
  }

  updateUser(user: User): Observable<User> {
    console.log(user)
    const url = `${this.apiUrl}/${user.id}`
    return this.http.put<User>(url, user)
  }

  addUser(user: User): Observable<User> {
    console.log("service")
    console.log(user)
    return this.http.post<User>(this.apiUrl, user)
  }
}

