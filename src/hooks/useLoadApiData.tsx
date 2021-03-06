import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

import {
  IDeputadoResponseDTO,
  IPartidoResponseDTO,
  IDeputadosPageDTO,
} from '../dto/IDeputadosPage';
import { IDeputadoDTO } from '../dto/IDeputadoInfoPage';

interface ILoadApiDataContext {
  loadDeputados(): Promise<IDeputadosPageDTO[]>;
  loadDeputado(id: string): Promise<IDeputadoDTO>;
}

const UseLoadApiDataContext = createContext<ILoadApiDataContext>(
  {} as ILoadApiDataContext,
);

export const LoadApiDataProvider: React.FC = ({ children }) => {
  const [deputadosPageData, setDeputadosPageData] = useState<
    IDeputadosPageDTO[]
  >({} as IDeputadosPageDTO[]);

  const loadDeputados = useCallback(async () => {
    const deputadosResponse = await api.get<IDeputadoResponseDTO>(
      `/api/v2/deputados?ordem=ASC&ordenarPor=siglaPartido`,
    );
    const partidosResponse = await api.get<IPartidoResponseDTO>(
      `/api/v2/partidos?ordem=ASC&ordenarPor=sigla`,
    );
    const partidosResponsePage2 = await api.get<IPartidoResponseDTO>(
      `/api/v2/partidos?ordem=ASC&ordenarPor=sigla&pagina=2&itens=15`,
    );
    const partidosResponsePage3 = await api.get<IPartidoResponseDTO>(
      `/api/v2/partidos?ordem=ASC&ordenarPor=sigla&pagina=3&itens=15`,
    );

    const deputadosData = deputadosResponse.data.dados;
    const partidosData = [
      ...partidosResponse.data.dados,
      ...partidosResponsePage2.data.dados,
      ...partidosResponsePage3.data.dados,
    ];

    const separatedByPartido = partidosData
      .map<IDeputadosPageDTO>((partido) => {
        const filteredDeputados = deputadosData.filter(
          (deputado) => partido.sigla === deputado.siglaPartido,
        );
        return {
          nome: partido.nome,
          sigla: partido.sigla,
          id: partido.id,
          deputados: filteredDeputados,
        };
      })
      .filter((separetedData) => separetedData.deputados.length >= 1);
    setDeputadosPageData(separatedByPartido);

    return separatedByPartido;
  }, []);

  const loadDeputado = useCallback(async (id: string) => {
    const response = await api.get(`api/v2/deputados/${id}`);
    return response.data.dados;
  }, []);

  return (
    <UseLoadApiDataContext.Provider value={{ loadDeputados, loadDeputado }}>
      {children}
    </UseLoadApiDataContext.Provider>
  );
};

export function UseLoadApiData(): ILoadApiDataContext {
  const context = useContext(UseLoadApiDataContext);

  if (!context) {
    throw new Error(
      'useLoadApiData must be used with a LoadApiDataProvider. Put the component inside the LoadApiData context',
    );
  }

  return context;
}
