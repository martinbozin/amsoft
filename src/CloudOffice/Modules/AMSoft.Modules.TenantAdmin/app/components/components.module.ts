import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { ModulesComponent } from './modules/modules';
import { SettingsComponent } from './settings/settings';
import { UsersComponent } from './users/users';
import { TenantsComponent } from './tenants/tenants';

import { FormsModule } from '@angular/forms';
// Modal Component
import { ModalModule }              from 'ng2-bootstrap/modal';
// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/tabs';
// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';
import { TenantService}  from './tenants/tenant.service'
import { DataService } from '../shared/services/data.service'
import { ApiGatewayService } from '../shared/services/api-gateway.service'
 
@NgModule({
  imports: [
    ComponentsRoutingModule,
    ModalModule.forRoot(),
      TabsModule,
      FormsModule
  ],
  declarations: [
      ModulesComponent,
      SettingsComponent,
      UsersComponent,
      TenantsComponent,
  ],
  providers: [TenantService, DataService, ApiGatewayService, Http]
})
export class ComponentsModule { }
