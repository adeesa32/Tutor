import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../core/service/users.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {//implements OnInit {
  formularioRegistro: FormGroup;
  name:string;
  lastname:string;
  email:string;
  password:string;

  constructor(private fb: FormBuilder, private userservice: UsersService, private router: Router) { }
  //constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {

    this.formularioRegistro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      user: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  guardarregistro(){
    //console.log(this.forma.value)

    //const registro = { name: this.name, lastname: this.lastname, email: this.email,  password: this.password };
    this.userservice.guardarregistro(this.formularioRegistro.value).subscribe((datos:any)=> {  //registro en vez de this.formularioRegistro.value
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }},
      error => {
        console.log(error);
      });

  }
}
