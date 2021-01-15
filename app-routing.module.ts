import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectShapeComponent } from './select-shape/select-shape.component';
import { AddShapeComponent } from './add-shape/add-shape.component';
import { InsertValuesComponent } from './insert-values/insert-values.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/add-shape' },


  {
    path: 'add-shape',
    component: AddShapeComponent,
  },
  {
    path: 'select-shape',
    component: SelectShapeComponent,
  },
  {
    path: 'insert',
    component: InsertValuesComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
