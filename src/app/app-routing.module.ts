import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { SlotsComponent } from './slots/slots.component';

const routes: Routes = [
  { path: 'slots',  component:SlotsComponent },
  {path :'add-user',component :AddUserComponent },
  {path :'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
