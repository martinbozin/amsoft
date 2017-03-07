import { Component } from '@angular/core';

@Component({
    templateUrl: 'tenants.html'
})
export class TenantsComponent {
    constructor() { }
    //tenantModel: TenantModel;
    //errors: string[];
    //controls: any;

    //constructor(private tenantService: TenantService, private router: Router, private authService: AuthService) {
    //    this.tenantModel = new TenantModel('', '', '');
    //}

    //getTenant(model: any): void {
    //    this.tenantModel.name = model.email;
    //    this.tenantModel.address = model.password;
    //    // this.loginModel.rememberMe = model.rememberMe;
    //    this.tenantService.getTenant(this.loginModel)
    //        .subscribe((res: Response) => {
    //            this.authService.setAuth(res);
    //            this.router.navigate(['']);
    //        },
    //        (errors: string[]) => {
    //            this.errors = errors;
    //        });
    //};

}
