import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-list-livro',
  templateUrl: './list-livro.component.html',
  styleUrls: ['./list-livro.component.css']
})
export class ListLivroComponent implements OnInit {

  livros: any;
  currentIndex = -1;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.livroService.getAll()
      .subscribe(
        data => {
          this.livros = data.data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
