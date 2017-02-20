import { NgModule } from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { routing }            from './admin.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTabsetSelectbyid } from './tabset-selectbyid';

@NgModule({
    imports: [routing, SharedModule, NgbModule],
    declarations: [AdminComponent, NgbdTabsetSelectbyid],
    providers: [AdminService]
})
export class AdminModule { }
