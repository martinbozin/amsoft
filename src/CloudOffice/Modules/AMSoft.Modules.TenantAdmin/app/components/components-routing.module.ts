import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users';
import { SettingsComponent } from './settings/settings';
import { ModulesComponent } from './modules/modules';
import { TenantsComponent } from './tenants/tenants';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
        {
            path: 'tenant',
            component: TenantsComponent,
            data: {
                title: 'Tenant'
            }
        },
      {
        path: 'modules',
        component: ModulesComponent,
        data: {
          title: 'Modules'
        }
        },
      {
          path: 'users',
          component: UsersComponent,
          data: {
              title: 'Users'
          }
      },
      {
          path: 'settings',
          component: SettingsComponent,
          data: {
              title: 'Settings'
          }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
