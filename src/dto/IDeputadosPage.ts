interface Deputado {
  id: number;
  nome: string;
  siglaPartido: string;
  singlaUf: string;
  idLegislatura: string;
  urlFoto: string;
}

interface Partido {
  id: string;
  sigla: string;
  nome: string;
}

export interface IDeputadosPageDTO {
  nome: string;
  sigla: string;
  id: string;
  deputados: Deputado[];
}

export interface IDeputadoResponseDTO {
  dados: Deputado[];
}

export interface IPartidoResponseDTO {
  dados: Partido[];
}
