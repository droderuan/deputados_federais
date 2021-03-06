import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import AsideMenu from '../../components/AsideMenu';

import { Container, MainContent, Header, Content } from './styles';

import { UseLoadApiData } from '../../hooks/useLoadApiData';

import { IDeputadoDTO } from '../../dto/IDeputadoInfoPage';

const DeputadoInfo: React.FC = () => {
  const [deputado, setDeputado] = useState<IDeputadoDTO>({} as IDeputadoDTO);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { loadDeputado } = UseLoadApiData();

  useEffect(() => {
    loadDeputado(id).then((response) => {
      setDeputado(response);
      setLoading(false);
    });
  }, [id, loadDeputado]);
  return (
    <Container>
      <AsideMenu />
      <MainContent>
        <Header />
        <Content>
          {!loading ? (
            <>
              <div className="deputado-header">
                <img
                  src={deputado.ultimoStatus.urlFoto}
                  alt={deputado.ultimoStatus.nome}
                />
                <h2>{deputado.ultimoStatus.nome}</h2>
                <hr />
              </div>
              <div className="info">
                <div className="info-pessoa">
                  <div className="label">
                    <span>Nome civil</span>
                    <p>{deputado.nomeCivil}</p>
                  </div>
                  <div className="label">
                    <span>CPF</span>
                    <p>{deputado.cpf}</p>
                  </div>
                  <div className="label">
                    <span>Data de nascimento</span>
                    <p>{deputado.dataNascimento}</p>
                  </div>
                  <div className="label">
                    <span>Escolaridade</span>
                    <p>{deputado.escolaridade}</p>
                  </div>
                  <div className="label">
                    <span>Condição eleitoral</span>
                    <p>{deputado.ultimoStatus.condicaoEleitoral}</p>
                  </div>
                  <div className="label">
                    <span>Situação</span>
                    <p>{deputado.ultimoStatus.situacao}</p>
                  </div>
                </div>
                <h2>Gabinete</h2>
                <div className="info-gabinete">
                  <div className="label">
                    <span>Nome</span>
                    <p>{deputado.ultimoStatus.gabinete.nome}</p>
                  </div>
                  <div className="label">
                    <span>Prédio</span>
                    <p>{deputado.ultimoStatus.gabinete.predio}</p>
                  </div>
                  <div className="label">
                    <span>Andar</span>
                    <p>{deputado.ultimoStatus.gabinete.andar}</p>
                  </div>
                  <div className="label">
                    <span>Sala</span>
                    <p>{deputado.ultimoStatus.gabinete.sala}</p>
                  </div>
                  <div className="label">
                    <span>Telefone</span>
                    <p>{deputado.ultimoStatus.gabinete.telefone}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>loading</h1>
          )}
        </Content>
      </MainContent>
    </Container>
  );
};

export default DeputadoInfo;
