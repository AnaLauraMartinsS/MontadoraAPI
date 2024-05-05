import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-criar-carro',
  templateUrl: './criar-carro.component.html',
  styleUrls: ['./criar-carro.component.css'],
})
export class CriarCarroComponent implements OnInit {


  ngOnInit(): void {
  }

  nomeCarro!: string;
  anoDeFabricacao!: number;
  anoModeloCarro!: number;
  modeloCarro!: string;
  cores: string[] = [];
  marca!: string;
  cor!: string;

  constructor(
    private router: Router,
    private carroService: CarroService,
  ) {}

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }

  criarCarro() {
    this.carroService.criarCarro(
      this.nomeCarro,
      this.anoDeFabricacao,
      this.anoModeloCarro,
      this.modeloCarro,
      this.cores,
      this.marca
    );
  }

  inserirCor() {
    if(this.cores.includes(this.cor))
      return;
   this.cores.push(this.cor.charAt(0).toUpperCase() + this.cor.slice(1));
   this.cor = '';
  }
}
