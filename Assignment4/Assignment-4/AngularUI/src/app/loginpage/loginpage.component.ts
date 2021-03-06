import { Component, OnInit, Output } from '@angular/core';
import {User} from '../userModel'; 
import { FormsModule} from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  value:any;
  array:Response[]=[] ;
  statusdata:boolean=true;
  users = {name: '', password: ''};

 
constructor(private auth:AuthService,private router:Router){ this.statusdata=true; }
onSubmit(user:User) {
  this.auth.getdata(user).subscribe(response=>{ 
    if(response==null){
      this.statusdata=false;
      
    }
    else{ console.log(response.role);
      if(response.role=="User"){
      this.router.navigate(['customerdash']);
    }
    else{

      this.router.navigate(['/home']);
    }
    }
  });
  
   
}

Signup(){
  this.router.navigate(['/signup']);
}
Reset(){
  this.statusdata=true;
}
update(){
  this.statusdata=true;
}



}
