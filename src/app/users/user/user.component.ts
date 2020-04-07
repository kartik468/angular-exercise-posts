import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService) {}

  user: User;

  userForm: FormGroup;

  isEdit: boolean;

  ngOnInit(): void {
    this.createUserForm();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const userId = +paramMap.get('id');
      this.usersService.getUser(userId).subscribe(user => {
        this.user = user;
      });
    });
  }

  get contacts() {
    return this.userForm.get('contacts') as FormArray;
  }

  forbiddenName(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value === name ? { forbiddenName: value } : null;
    };
  }

  createUserForm() {
    this.userForm = new FormGroup({
      id: new FormControl('', { validators: [Validators.required] }),
      name: new FormControl('', [Validators.required, this.forbiddenName('kartik')]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required])
      }),
      contacts: new FormArray([])
    });
  }

  createContact() {
    return new FormGroup({
      type: new FormControl(''),
      value: new FormControl('')
    });
  }

  addContact() {
    this.contacts.push(this.createContact());
  }

  onEditUserClick() {
    this.isEdit = true;
    this.userForm.patchValue(this.user);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.usersService.editUser(this.userForm.value).subscribe(_ => {});
    }
  }
}
