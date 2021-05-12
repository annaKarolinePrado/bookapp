import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemLivroPageRoutingModule } from './listagem-livros-routing.module';

import { ListagemLivroPage } from './listagem-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemLivroPageRoutingModule
  ],
  declarations: [ListagemLivroPage]
})
export class ListagemLivroPageModule {}
