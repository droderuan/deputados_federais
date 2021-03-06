import React from 'react';
import { BsPerson, BsHouse } from 'react-icons/bs';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <a href="/">
          Câmara <br /> dos deputados
        </a>
      </Logo>
      <Menu>
        <h3>Menu</h3>
        <ul>
          <li>
            <a href="/">
              <BsHouse size={30} />
              Home
            </a>
          </li>
          <li>
            <a href="/">
              <BsPerson size={30} />
              Deputados
            </a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
