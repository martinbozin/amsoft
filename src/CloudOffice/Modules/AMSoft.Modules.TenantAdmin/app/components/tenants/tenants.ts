import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TenantModel } from './tenant.model';
import { TenantService } from './tenant.service';

@Component({
    templateUrl: 'tenants.html'
})
export class TenantsComponent implements OnInit {
    tenantModel: TenantModel = new TenantModel('', '', '');

    @Output() notification = new EventEmitter<string>();

    errors: string[];
    controls: any;

    constructor(private tenantService: TenantService) {
    }

    ngOnInit() {
        this.tenantService.getTenant()
            .subscribe((res: any) => {
                this.tenantModel.name = res.name;
                this.tenantModel.address = res.address;
                this.tenantModel.phone = res.phone;
            },
            (errors: any) => {
                this.notification.emit(errors[0]);
            }
            );
    }
}
