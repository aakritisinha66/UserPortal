import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userData: any[] =[];

  displayedColumns = ["index", "username", "phone", "email", "actions"]
  currentPage: number = 0;
  pageSize: number = 5;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userData = this.userService.getUsers();
    console.log("User Data: ", this.userData)
  }

  addNew() {
    this.router.navigate(['/update-user']);
  }

  editUser(index: number) {
    this.router.navigate(['/update-user', index]);
  }

  deleteUser(index: number) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(index);
      this.userData = this.userService.getUsers();
      window.alert("User deleted!")
    }
  }

  pagination(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  sorting(field: string) {
    console.log("Sort Column: ", field)
    this.userData.sort((a, b) => a[field].localeCompare(b[field]));
  }
}
