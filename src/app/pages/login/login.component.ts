import { Component, inject, OnInit } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../constants/toast.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService)

  private router = inject(Router)

  private toastr = inject(ToastService)


  bgUrl = BG_IMG_URL
  logoUrl = LOGO_URL


  errorMsgEmail = '';
  errorMsgPassword = '';

  authUser = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] })
  })

  ngOnInit(): void {
    console.log(this.authService.isLogged);

    

    // if (this.authService.isLogged) {
    //   this.router.navigate(['browse'])
    // }
  }


  updateErrorMessageEmail() {
    if (this.authUser.controls.email.hasError('required')) {
      this.errorMsgEmail = 'You must enter a value'
    } else if (this.authUser.controls.email.hasError('email')) {
      this.errorMsgEmail = 'Not a valid email'
    }
  }
  updateErrorMessagePassword() {
    if (this.authUser.controls.password.hasError('required')) {
      this.errorMsgPassword = 'You must enter a value'
    } else if (this.authUser.controls.password.hasError('minlength')) {
      this.errorMsgPassword = 'The password must contain from 8 to 60 characters.'
    }
  }

  signIn() {
    if (this.authUser.valid && this.authUser.value.email === 'as@gmail.com' && this.authUser.value.password === '12341234') {
      this.authService.login('Success')
      this.toastr.showSuccess('Welcome to Netflix', 'Success')
      this.router.navigate(['browse'])

    } else {
      this.toastr.showError('Email or password is not available !', 'Check again!')
    }


  }

}
