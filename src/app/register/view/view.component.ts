import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  userId!: any;
  register!: any;
  valid!: any;

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params: any) => {
      this.userId = params.id;
    });
  }

  ngOnInit(): void {
    this.viewRegister(this.userId);
  }

  async viewRegister(id: any) {
    const api = await this.registerService.viewRegister(id);
    console.log(api.response.registers);
    this.register = api.response.registers;
  }
}
