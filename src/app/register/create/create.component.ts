import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  registerName!: string;
  createRegisterForm!: FormGroup;
  success!: any;
  loading: boolean = false;

  // this should be called from database, but...
  public checks: Array<any> = [
    { knowledge: 'Git', value: 1 },
    { knowledge: 'React', value: 2 },
    { knowledge: 'PHP', value: 3 },
    { knowledge: 'NodeJS', value: 4 },
    { knowledge: 'DevOps', value: 5 },
    { knowledge: 'Banco de Dados', value: 6 },
    { knowledge: 'TypeScript', value: 7 },
  ];

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    route.params.subscribe((params: any) => {
      this.registerName = params.name;
    });
  }

  ngOnInit(): void {
    this.createRegisterForm = new FormGroup({
      name: new FormControl(this.registerName, [
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
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      celphone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      knowledges: new FormArray([], Validators.required),
    });
  }

  get name() {
    return this.createRegisterForm.get('name')!;
  }

  get email() {
    return this.createRegisterForm.get('email')!;
  }

  get cpf() {
    return this.createRegisterForm.get('cpf')!;
  }

  get celphone() {
    return this.createRegisterForm.get('celphone')!;
  }

  get knowledges() {
    return this.createRegisterForm.get('knowledges')!;
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.createRegisterForm.invalid) {
      this.toastr.error('Preencha os campos corretamente!', 'Ops');
      // this.findInvalidControls();
      return;
    }
    try {
      this.loading = true;
      this.createRegisterForm.disable();
      const api = await this.registerService.create(
        this.createRegisterForm.value
      );
      console.log(api);
      if (api.status === 200) {
        this.toastr.success(api.message, 'Wow!!');
        this.success = true;
      }
      console.log(api);
      formDirective.resetForm();
      this.createRegisterForm.reset();

      this.router.navigate(['login']);
    } catch (err: any) {
      this.loading = false;
      this.createRegisterForm.enable();
      this.toastr.error(err.message, 'Ops');
      console.log(err);
    }
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.createRegisterForm.get(
      'knowledges'
    ) as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.createRegisterForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
    return invalid;
  }
}
