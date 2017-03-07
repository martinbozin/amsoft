import { Injectable } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { TenantModel } from './tenants/tenant.model';

@Injectable()
export class TenantService {

    private getTenanntApi: string = 'api/Tenant/getTenant/';

    constructor(public tenantService: DataService) { }

    getTenant(creds: TenantModel) {
        return this.tenantService.get(this.getTenanntApi, creds);
    }

}
