export interface ICarro {
  idCarro?: number;
  nomeCarro: string;
  anoFabricacaoCarro: number;
  anoModeloCarro: number;
  modeloCarro: string;
  marca: IMarca;
  cores: ICor[];
}

export interface IMarca {
    nome: string;
}

export interface ICor {
    nome: string;
}
