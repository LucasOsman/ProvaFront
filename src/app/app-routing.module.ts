import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivroComponent } from './components/add-livro/add-livro.component';
import { ListLivroComponent } from './components/list-livro/list-livro.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'list', component:  ListLivroComponent},
  { path: 'add', component: AddLivroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
