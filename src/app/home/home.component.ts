import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LocalStorageService} from "../services/local-storage.service";
import {REGEX_PATTERNS} from "../libs/regex";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fullName = this.localStorageService.getItem('fullName');
  ipAddress = new FormControl({ value: '', disabled: false}, [Validators.required, this.validateInput]);

  constructor(private localStorageService: LocalStorageService) {
  }

  validateInput(c: FormControl) {
    return (new RegExp(REGEX_PATTERNS.ipAddress).test(c.value) || new RegExp(REGEX_PATTERNS.ipAddressWithSubnet).test(c.value)) ? null : {
      validateInput: {
        valid: false
      }
    };
  }

  save() {
    console.log(this.ipAddress);
  }

}
