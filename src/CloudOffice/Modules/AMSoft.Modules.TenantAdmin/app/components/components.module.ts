import { NgModule }                 from '@angular/core';
import { ModulesComponent } from './modules/modules';
import { SettingsComponent } from './settings/settings';
import { UsersComponent } from './users/users';
import { TenantsComponent } from './tenants/tenants';
// Modal Component
import { ModalModule }              from 'ng2-bootstrap/modal';
// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/tabs';
// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';
 

@NgModule({
  imports: [
    ComponentsRoutingModule,
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
      ModulesComponent,
      SettingsComponent,
      UsersComponent,
      TenantsComponent
  ]
})
export class ComponentsModule { }
