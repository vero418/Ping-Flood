import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/db-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';

  wrongLogin=false;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  connectUser(){
    let user = new User();
    user.name = this.username;
    user.password = this.password;
    this.api.login(user).subscribe(res=>{
      if(res){
        this.wrongLogin = false;
      }else{
        this.wrongLogin = true;
      }
    })
  }

}
