import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  RegisterGroup!: FormGroup;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.RegisterGroup=this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      confpassword:['', Validators.required],
    });
  }
  HandleRegister(){
    if(this.RegisterGroup.valid){
      console.log(this.RegisterGroup.value);
      this.authService.register(this.RegisterGroup.value).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },error => {
        console.log(error);
      }
    )
    }
  }
  
}
