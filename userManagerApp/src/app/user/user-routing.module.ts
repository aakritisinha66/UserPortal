import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
    {path: 'update-user', component: UserFormComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'update-user/:index', component: UserFormComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }