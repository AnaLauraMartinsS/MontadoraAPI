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
  idCarro?: number;
  nomeCarro!: string;
  anoFabricacaoCarro!: number;
  anoModeloCarro!: number;
  modeloCarro!: string;
  marca!: string;
  cores!: string[];
  cor!: string;

  constructor(private carroService: CarroService, private router: Router) {}

  ngOnInit(): void {
    this.listarCarro();
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
        this.listarCarro();
      },
      (error) => {
        console.error('Erro ao excluir carro:', error);
      }
    );
  }

  listarCarro(): void {
    this.carroService.listarCarros().subscribe((response: ICarro[]) => {
      this.listaCarros = response;
    }, (error) => console.error(error), () => console.log("Listado com sucesso"));
  }

  abrirModal(): void {
    const modalDiv = document.getElementById('modalCarro');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  fecharModal(): void {
    const modalDiv = document.getElementById('modalCarro');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  iniciarEdicao(carro: ICarro): void {
    this.idCarro = carro.idCarro;
    this.nomeCarro = carro.nomeCarro;
    this.anoFabricacaoCarro = carro.anoFabricacaoCarro;
    this.anoModeloCarro = carro.anoModeloCarro;
    this.marca = carro.marca.nome;
    this.cores = carro.cores.map((cor) => cor.nome);
    this.modeloCarro = carro.modeloCarro;
    this.abrirModal();
  }

  excluirCor(index: number) {
    this.cores.splice(index, 1);
  }

  adicionarCor() {
    if (
      this.cores.includes(this.cor.charAt(0).toUpperCase() + this.cor.slice(1))
    )
      return;
    this.cores.push(this.cor.charAt(0).toUpperCase() + this.cor.slice(1));
    this.cor = '';
  }

  carroEditado() {
    if(this.idCarro != undefined)
    this.carroService.carroEditado(
      this.idCarro,
      this.nomeCarro,
      this.anoFabricacaoCarro,
      this.anoModeloCarro,
      this.modeloCarro,
      this.cores,
      this.marca
    );
    this.fecharModal()
    setTimeout(()=> {
      this.listaCarros = [];
      this.listarCarro();
    }, 1000);
  }
}
