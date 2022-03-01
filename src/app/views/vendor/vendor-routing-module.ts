import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateVendorComponent } from "./create-vendor/create-vendor.component";
import { ViewVendorComponent } from "./view-vendor/view-vendor.component";

const routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule {

    static components = [CreateVendorComponent, ViewVendorComponent]
}