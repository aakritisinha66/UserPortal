import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'user';

  constructor() { }

  //To fetch the list of users
  getUsers() {
    const user = localStorage.getItem(this.localStorageKey);
    return user ? JSON.parse(user) : [];
  }

  //To add user details
  addUser(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  //To update user details
  updateUser(index: number, user: any) {
    const users = this.getUsers();
    users[index]=user;
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  //To delete user
  deleteUser(index: number) {
    const users = this.getUsers();
    users.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }
}
