import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarro, ICor } from '../models/ICarro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarroService {

  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listarCarros(): Observable<ICarro[]> {
    return this.http.get<ICarro[]>(this.baseUrl + '/carro');
  }

  criarCarro(
    nomeCarro: string,
    anoFabricacaoCarro: number,
    anoModeloCarro: number,
    modeloCarro: string,
    cores: string[],
    marca: string
  ): void {
    const listaCores: ICor[] = [];
    for (let nomeCor of cores) {
      const novaCor: ICor = { nome: nomeCor };
      listaCores.push(novaCor)
    }
    const novoCarro: ICarro = {
      nomeCarro: nomeCarro,
      anoFabricacaoCarro: anoFabricacaoCarro,
      anoModeloCarro: anoModeloCarro,
      modeloCarro: modeloCarro,
      cores: listaCores,
      marca: { nome: marca },
    };
    this.http.post(this.baseUrl + '/carro/cadastro', novoCarro).subscribe((response ) =>{
      console.log(response);
    })
  }
  
}
