import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
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
    this.register = api.response.registers;
  }

  async validRegister(id: any) {
    const api = await this.registerService.validRegister(id);

    if (api.status === 200) {
      this.toastr.success('Wow!!', api.message);
      // forgot to comment
      this.viewRegister(id);
    } else {
      this.toastr.success('Fim da sessão!', 'OPS!!');
      this.router.navigate(['login']);
    }
    console.log(api);
  }
}
