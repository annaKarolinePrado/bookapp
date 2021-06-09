import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { LivroService } from './livro.service';
import { ToastController } from '@ionic/angular';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  livroId: number;
  livroForm: FormGroup;

  constructor(private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService,
    private router: Router) {

      let livro = {
      id: null,
      nome: '',
      autor: ''
    };
    this.inicializaFormulario(livro);
    
   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      console.log("passou " + id)
      /*this.livroId = parseInt(id);
      this.livroService
        .getLivro(this.livroId)
        .subscribe((livro) => {
          this.inicializaFormulario(livro);
        });*/
        let l = new Livro ();
        l.id = 1;
        l.nome ='teste autor';
        l.autor ='machado';
        console.log(l)
        this.inicializaFormulario(l);
    }
  }
  
  inicializaFormulario(livro: Livro) {
    console.log(livro);
    this.livroForm = new FormGroup({
      nome: new FormControl(livro.nome, [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(150),  
      ]),      
      autor: new FormControl(livro.autor, Validators.required)
    })
  }

  salvar() {
    const livro: Livro = {...this.livroForm.value, id: this.livroId}
    this.livroService.salvar(livro).subscribe(
      () => this.router.navigate(['livros']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o livro ${livro.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }
  get nome() {
    return this.livroForm.get('nome');
  }
  get autor() {
    return this.livroForm.get('autor');
  }
}
