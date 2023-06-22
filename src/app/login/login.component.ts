import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../services/local-storage.service";
import {REGEX_PATTERNS} from "../libs/regex";
import {User} from "../interfaces/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
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

    const user: User = this.signInForm.value as User;
    if (user.email === 'user@company.com' && user.password === 'Password1!') {
      this.showSuccess();
      this.setUserValuesToStorage(user)
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

  setUserValuesToStorage(user: Partial<User>) {
    this.localStorageService.setItem('fullName', user.fullName);
    this.localStorageService.setItem('email', user.email);
  }
}
