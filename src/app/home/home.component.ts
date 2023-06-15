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
  ipAddress = new FormControl({ value: '', disabled: false}, [Validators.required, Validators.pattern(REGEX_PATTERNS.ipAddressWithSubnet)]);

  constructor(private localStorageService: LocalStorageService) {
  }

  save() {
    console.log(this.ipAddress);
  }

}
