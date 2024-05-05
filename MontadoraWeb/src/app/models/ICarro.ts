export interface ICarro {
  idCarro?: number;
  nomeCarro: string;
  anoFabricacaoCarro: number;
  anoModeloCarro: number;
  modeloCarro: string;
  marca: IMarca;
  cores: ICor[];
}

interface IMarca {
    nome: string;
}

export interface ICor {
    nome: string;
}
