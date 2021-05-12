import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemLivroPage } from './listagem-livros.page';
import { CadastroPage } from '../cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemLivroPageRoutingModule {}
