import { Component, OnInit } from '@angular/core';
import {LocalStorageEnum} from "../../../core/enums/local-storage.enum";

@Component({
  selector: 'app-login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.scss']
})
export class LoginToolbarComponent implements OnInit {

  public userEmail: string;

  constructor() {
    this.userEmail = JSON.parse(localStorage.getItem(LocalStorageEnum.USER_EMAIL) || '');
  }

  ngOnInit(): void {
  }

}
