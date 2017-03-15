import { Injectable } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { TenantModel } from './tenant.model';

@Injectable()
export class TenantService {

    private getTenanntApi: string = 'TenantAdministration/Tenant/GetTenantInfo/';

    constructor(public dataService: DataService) { }
 
    getTenant() {
        return this.dataService.get(this.getTenanntApi);
    }

}
