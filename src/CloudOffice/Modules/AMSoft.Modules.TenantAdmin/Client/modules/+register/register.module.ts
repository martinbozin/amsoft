import { NgModule }       from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { RegisterComponent } from './+register/register.component';
import { RegisterConfirmationComponent } from './+confirmation/register-confirmation.component';
import { RegisterService } from './register.service';
import { routing }            from './register.routes';


@NgModule({
    imports: [routing, SharedModule],
    declarations: [RegisterComponent, RegisterConfirmationComponent],
    providers: [RegisterService]
})
export class RegisterModule { }
