import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listagem-livro',
    loadChildren: () => import('./cadastro/listagem-livros/listagem-livros.module').then( m => m.ListagemLivroPageModule)
  },
  {
    path: 'cadastro-livro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'autor-livro',
    loadChildren: () => import('./autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'edicao/:id',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
