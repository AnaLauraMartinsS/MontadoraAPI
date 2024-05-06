import { CarroService } from './../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { ICarro, ICor } from '../models/ICarro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html',
  styleUrls: ['./lista-carro.component.css'],
})
export class ListaCarroComponent implements OnInit {
  listaCarros!: ICarro[];

  constructor(private carroService: CarroService, private router: Router) {}

  ngOnInit(): void {
    this.carroService.listarCarros().subscribe((response: ICarro[]) => {
      this.listaCarros = response;
    });
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }

  formatarCores(cores: ICor[]) {
    let corTexto: string = '';
    if (cores.length < 1) {
      return cores[0].nome.slice(0, -2);
    }
    for (let cor of cores) {
      corTexto = corTexto + cor.nome + ', ';
    }
    return corTexto.slice(0, -2);
  }

  deletarCarro(id: number): void {
    this.carroService.deletarCarro(id).subscribe(
      (response) => {
        console.log(response);
        const index = this.listaCarros.findIndex(
          (carro) => carro.idCarro === id
        );
        if (index !== -1) {
          this.listaCarros.splice(index, 1);
        }
      },
      (error) => {
        console.error('Erro ao excluir carro:', error);
      }
    );
  }
}
