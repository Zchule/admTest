import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  users: any = [];
  constructor(
    private userService: UserService
  ) {
  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .pipe(
      map(changes =>
        changes.map((item: any) =>
        ({ key: item.payload.key,
          ...item.payload.val() }))
      )
    )
    .subscribe((users) => {
      this.users = users;
      console.log(this.users);
      }
    );
  }
}
