import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/app.guard';

const routes: Routes = [
    {path : '' , redirectTo : '/login', pathMatch : 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'filter', component:  FilterComponent ,canActivate :[AuthGuard]},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }