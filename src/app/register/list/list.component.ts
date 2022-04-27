import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  registers!: Array<any>;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRegisters();
  }

  async getRegisters() {
    const api = await this.registerService.listRegisters();
    console.log(api.response.registers);
    this.registers = api.response.registers;
  }

  async viewRegister(id: any) {
    const api = await this.registerService.viewRegister(id);
    console.log(api.response.registers);

    if (api.response.registers) {
      this.router.navigate(['registro', id]);
    }
  }
}
