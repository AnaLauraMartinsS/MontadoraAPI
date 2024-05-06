import { ICarro, ICor } from './../models/ICarro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

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
    if (
      !nomeCarro ||
      !anoFabricacaoCarro ||
      !anoModeloCarro ||
      !modeloCarro ||
      !cores ||
      !marca
    ) {
      console.error('Todos os campos tem que estar preenchidos');
      return;
    }

    const listaCores: ICor[] = [];
    for (let nomeCor of cores) {
      const novaCor: ICor = { nome: nomeCor };
      listaCores.push(novaCor);
    }
    const novoCarro: ICarro = {
      nomeCarro: nomeCarro,
      anoFabricacaoCarro: anoFabricacaoCarro,
      anoModeloCarro: anoModeloCarro,
      modeloCarro: modeloCarro,
      cores: listaCores,
      marca: { nome: marca },
    };
    this.http
      .post(this.baseUrl + '/carro/cadastro', novoCarro)
      .subscribe((response) => {
        console.log(response);
      });
  }

  deletarCarro(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/carro/${id}`, {
      responseType: 'text',
    });
  }

}
