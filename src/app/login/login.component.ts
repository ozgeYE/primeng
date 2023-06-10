import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../services/local-storage.service";
import {REGEX_PATTERNS} from "../libs/regex";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  asd: any;
  signInForm = new FormGroup({
    fullName: new FormControl({ value: '', disabled: false}, Validators.required),
    email: new FormControl({ value: '', disabled: false}, [Validators.required, Validators.pattern(REGEX_PATTERNS.email)]),
    password: new FormControl({ value: '', disabled: false}, [Validators.required, Validators.pattern(REGEX_PATTERNS.password), Validators.minLength(8)])
  })

  constructor(private router: Router,
              private messageService: MessageService,
              private localStorageService: LocalStorageService
              ) {
  }

  login(): void {
    if (!this.signInForm.valid)
      return;

    const {email, password, fullName} = this.signInForm.value;
    if (email === 'user@company.com' && password === 'Password1!') {
      this.showSuccess();
      this.localStorageService.setItem('fullName', fullName);
      this.localStorageService.setItem('email', email);
      this.router.navigate(['/home']);
    } else {
      this.showError()
    }
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sign In Success'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email or Password is incorrect!'});
  }
}
