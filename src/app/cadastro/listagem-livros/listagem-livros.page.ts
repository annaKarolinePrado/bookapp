import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController,  } from '@ionic/angular';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-listagem-livro',
  templateUrl: './listagem-livros.page.html',
  styleUrls: ['./listagem-livros.page.scss'],
})
export class ListagemLivroPage implements OnInit {
   livros = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private livroService: LivroService) { }

  ngOnInit() { 

  }
  ionViewWillEnter() {
    this.listar();
  }
  confirmarExclusao(livro: Livro) {
    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir o livro ${livro.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(livro)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(livro: Livro) {
    this.livroService
      .excluir(livro.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir o autor ${livro.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
  listar() {
    /*
    this.livroService
      .getLivros()
      .subscribe(
        (dados) => {
          this.livros = dados;
        }, 
        (erro) => {
          console.error(erro);
        }
      );*/

      let l1 ={
        id : 10,
        nome: 'O Principe',
        autor: 'Maquiavel'
      }

      let l2 = {
        id : 11,
        nome: 'Dom Casmurro',
        autor: 'Machado de Assis'
      }
      this.livros.push(l1);
      this.livros.push(l2);
  }
}
