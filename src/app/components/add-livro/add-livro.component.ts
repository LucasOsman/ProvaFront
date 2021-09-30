import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private livroService: LivroService, 
    private router : Router,
    private route: ActivatedRoute) { }

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
          this.router.navigate(["/list"], { relativeTo: this.route });
        },
        error => {
          console.log(error);
        });
  }  
}
