import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createRegisterForm!: FormGroup;
  success!: any;

  constructor(private registerService: RegisterService, router: Router) {}

  ngOnInit(): void {
    this.createRegisterForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.email,
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.maxLength(14),
        Validators.minLength(14),
      ]),
      celphone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      knowledges: new FormControl([1, 2, 3]), // add validation
    });
  }

  get name() {
    return this.createRegisterForm.get('name')!;
  }

  get email() {
    return this.createRegisterForm.get('name')!;
  }

  get cpf() {
    return this.createRegisterForm.get('name')!;
  }

  get celphone() {
    return this.createRegisterForm.get('name')!;
  }

  get knowledges() {
    return this.createRegisterForm.get('name')!;
  }

  async onSubmit() {
    if (this.createRegisterForm.invalid) {
      return;
    }
    console.log(this.createRegisterForm.value);
    try {
      const response = await this.registerService.create(
        this.createRegisterForm.value
      );

      if (response.data.status === 200) {
        this.success = true;
      }
      console.log(response);
      // this.router.navigate(['']);
    } catch (err: any) {
      console.log(err);
    }
  }
}
