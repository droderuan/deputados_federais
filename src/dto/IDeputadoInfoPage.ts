export interface IDeputadoDTO {
  cpf: string;
  dataNascimento: string;
  escolaridade: string;
  municipioNascimento: string;
  nomeCivil: string;
  ultimoStatus: {
    nome: string;
    condicaoEleitoral: string;
    situacao: string;
    nomeEleitoral: string;
    urlFoto: string;
    gabinete: {
      nome: string;
      predio: string;
      sala: string;
      andar: string;
      telefone: string;
    };
  };
}
