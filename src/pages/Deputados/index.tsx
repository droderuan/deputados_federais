import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';

import { UseLoadApiData } from '../../hooks/useLoadApiData';

import AsideMenu from '../../components/AsideMenu';
import { Container, MainContent, Header, Content, Card } from './styles';

import { IDeputadosPageDTO } from '../../dto/IDeputadosPage';

// TODO: add pagination

const Deputados: React.FC = () => {
  const { loadDeputados } = UseLoadApiData();
  const history = useHistory();
  const [dataFromApi, setDataFromApi] = useState<
    IDeputadosPageDTO[] | undefined
  >([] as IDeputadosPageDTO[]);
  const [data, setData] = useState<IDeputadosPageDTO[] | undefined>(
    [] as IDeputadosPageDTO[],
  );

  useEffect(() => {
    let loaded: IDeputadosPageDTO[] = [];
    async function LoadData(): Promise<void> {
      loaded = await loadDeputados();
      setDataFromApi(loaded);
      setData(loaded);
    }
    LoadData();
  }, [loadDeputados]);

  const handleClickOnCard = useCallback(
    (id: number) => {
      history.push(`/${id}/info`);
    },
    [history],
  );

  const handleSearch = useCallback(
    (text: string) => {
      console.log(text);
      if (!dataFromApi) {
        return;
      }

      const filteredPartidoBySigla = dataFromApi.filter((partido) => {
        return partido.sigla.toUpperCase() === text.toUpperCase();
      });

      if (filteredPartidoBySigla.length > 0) {
        setData(filteredPartidoBySigla);
        return;
      }

      const filteredDeputadosByName = dataFromApi
        .map((partido) => {
          const filteredDeputados = partido.deputados.filter(
            (deputado) =>
              deputado.nome.toLowerCase().search(text.toLowerCase()) !== -1,
          );
          return {
            ...partido,
            deputados: filteredDeputados,
          } as IDeputadosPageDTO;
        })
        .filter((partido) => partido.deputados.length > 0);

      if (filteredDeputadosByName.length > 0) {
        console.log(filteredDeputadosByName);
        console.log('entrou deputado');

        setData(filteredDeputadosByName);
        return;
      }

      console.log('entrou n achou');
    },
    [data, dataFromApi],
  );

  return (
    <Container>
      <AsideMenu />
      <MainContent>
        <Header>
          <div className="searchInput">
            <BsSearch size={16} />
            <input
              type="text"
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Pesquise por nome ou sigla do partido"
            />
          </div>
        </Header>
        <Content>
          <ul>
            {data &&
              data.map((partidoNameAndDeputados) => (
                <li key={partidoNameAndDeputados.id}>
                  <div className="partido">
                    <span>{partidoNameAndDeputados.nome}</span>
                    <hr />
                  </div>
                  <div className="list">
                    {partidoNameAndDeputados.deputados.map((deputado) => (
                      <Card
                        key={deputado.id}
                        onClick={() => handleClickOnCard(deputado.id)}
                      >
                        <img src={deputado.urlFoto} alt={deputado.nome} />
                        <div className="wrapper">
                          <div className="info">
                            <span>Nome</span>
                            <p>{deputado.nome}</p>
                            <span>Partido</span>
                            <p>{deputado.siglaPartido}</p>
                            <span>Id da legislatura</span>
                            <p>{deputado.idLegislatura}</p>
                          </div>
                        </div>
                        <FiChevronRight size={25} />
                      </Card>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        </Content>
      </MainContent>
    </Container>
  );
};

export default Deputados;
