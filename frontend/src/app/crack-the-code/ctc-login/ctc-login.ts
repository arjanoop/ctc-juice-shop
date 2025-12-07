import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ctc-login',
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  standalone: true,
  templateUrl: './ctc-login.html',
  styleUrl: './ctc-login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtcLogin {
  signInForm: FormGroup;
  signUpForm: FormGroup;
  showSignup = false;
  hideSignInPassword: boolean = true;
  hideSignUpPassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
      ]]
    });
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
    // TODO: Uncomment the line below after enabling token validation on component initialization
    this.validateAndRedirect();
  }

  onLogin() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      this.redirectToHome();
    }
  }

  onSignup() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.redirectToHome();
    }
  }

  togglePasswordVisibility() {
    this.hideSignInPassword = !this.hideSignInPassword;
  }

  toggleSignUpPasswordVisibility() {
    this.hideSignUpPassword = !this.hideSignUpPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  showSignUp() {
    this.showSignup = true;
  }

  showSignIn() {
    this.showSignup = false;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  private validateAndRedirect(){
    //TODO: check for Token validity
    this.redirectToHome()
  }

  private redirectToHome() {
    this.router.navigate(['/ctc/home']).then((result:boolean)=>{
      if(!result){
        console.error("Token Expired!");
      }
    });
  }
}
