import { Injectable } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { TenantModel } from './tenant.model';

@Injectable()
export class TenantService {

    private getTenanntApi: string = '/Tenant/TenantName/';

    constructor(public dataService: DataService) { }
 
    getTenant(name) {
        return this.dataService.get(this.getTenanntApi,name);
    }

}
