import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';

const routes: Routes = [
  { path: 'form', component: FormExampleComponent},
  { path: '',   redirectTo: '/form', pathMatch: 'full' }, // redirect to `home`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
