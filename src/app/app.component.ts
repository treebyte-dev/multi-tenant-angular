import { Component, OnInit, HostBinding } from '@angular/core';
import { Tenant, TenantService } from './tenant/tenant.service';
import {TaskService} from './services/task.service';
import {EnvService} from './services/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.skins.less']
})
export class AppComponent implements OnInit {

  title = 'multi-tenant-angular';

  // tslint:disable-next-line:variable-name
  constructor(public tenantService: TenantService, private taskService: TaskService, public _envService: EnvService) {
      this._envService.setApiUrl();
  }

  @HostBinding('class.theme-client1') public client1Theme: boolean;
  @HostBinding('class.theme-client2') public client2Theme: boolean;

  ngOnInit() {
    this.enableThemes();
    this.getTasks();
  }

  get tenant(): string {
    return this.tenantService.getTenant();
  }

  enableThemes() {
    this.client1Theme = this.tenantService.getTenant() === Tenant.CLIENT1;
    this.client2Theme = this.tenantService.getTenant() === Tenant.CLIENT2;
  }
  getTasks() {
      this.taskService.getTasks()
      .subscribe((data: any) => {
          console.log(data);
        },
        error => {
          console.log('Error', error);
        });
  }
}
