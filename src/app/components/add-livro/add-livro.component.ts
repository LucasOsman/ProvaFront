import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-add-livro',
  templateUrl: './add-livro.component.html',
  styleUrls: ['./add-livro.component.css']
})
export class AddLivroComponent implements OnInit {
  livro = {
    nome: '',
    genero: '',
    autor: '',
    quantidadeFolhas: 0
  };
  submitted = false;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      nome: this.livro.nome,
      genero: this.livro.genero,
      autor: this.livro.autor,
      quantidadeFolhas: this.livro.quantidadeFolhas,
    };

    this.livroService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  create(): void {
    this.submitted = false;
    this.livro = {
      nome: '',
      genero: '',
      autor: '',
      quantidadeFolhas: 0
    };
  }
  
}
