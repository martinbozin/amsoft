import { Component } from '@angular/core';

import { AdminService } from './admin.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'appc--admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    message: any;

    constructor(private adminService: AdminService) { }

    doAdminOperation() {
        this.adminService.do()
            .subscribe(data => this.message = data);
    }
}
