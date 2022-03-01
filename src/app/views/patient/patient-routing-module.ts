import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SampleCreateComponent } from "./sample-create/sample-create.component";
import { SampleViewComponent } from "./sample-view/sample-view.component";

const routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRoutingModule {
    static components = [SampleCreateComponent, SampleViewComponent]
}