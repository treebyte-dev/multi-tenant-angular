// services/setlang.service.ts
import {Injectable} from '@angular/core';
import { TenantService} from '../tenant/tenant.service';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  constructor(private tenantService: TenantService) {
  }
  setApiUrl() {
      const tenant = this.tenantService.getTenant();
      const apiUrl = `${environment.API_URL_DOMAIN}${tenant}${environment.API_BLUEPRINT}`;
      localStorage.setItem('apiUrl', apiUrl);
  }
  getApiUrl() {
    return localStorage.getItem('apiUrl');
  }
  removeApiUrl(){
    localStorage.removeItem('apiUrl');
  }
}
