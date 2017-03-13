import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { TenantModel } from './tenant.model';
import { TenantService } from './tenant.service';


@Component({

    templateUrl: 'tenants.html'
})
export class TenantsComponent implements OnInit {
    tenantModel: TenantModel = new TenantModel('', '','');
    @Output() notification = new EventEmitter<string>();
 
    errors: string[];
    controls: any;

    constructor(private tenantService: TenantService) {
    }

    ngOnInit() {
        debugger;
        this.tenantService.getTenant(this.tenantModel.name)
            .subscribe((res: any) => {
                    debugger;
                this.tenantModel.name = res.firstName;
                this.tenantModel.address = res.lastName;
                this.tenantModel.phone = res.phone;
            },
            (errors: any) => this.notification.emit(errors[0])
            );
    }
}
