import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnoComponent } from './pages/uno/uno.component';
import { DosComponent } from './pages/dos/dos.component';

const routes: Routes = [
  {path: '', component:UnoComponent, pathMatch:'full'},
  {path:'dos', component:DosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
