import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

//form grp
//form array
//form control name


loginForm=this.fb.group({
  
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})

constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}


login(){
  
if(this.loginForm.valid){
 
  const email=this.loginForm.value.email
const password=this.loginForm.value.password

// alert(`${username}${email} ${password}`)
console.log(`${email} ${password}`);

const reqBody={email,password}

this.api.loginApi(reqBody).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.route.navigateByUrl("")
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
}
else{
  alert('invalid form')
}

}

}
