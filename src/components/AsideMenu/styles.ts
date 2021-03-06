import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 300px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 27px;

  background-color: #0f2d68;
  border-radius: 0 40px 40px 0;
  box-shadow: 5px 0 6px rgba(0, 0, 0, 0.35);
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    transition: color 200ms;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const Menu = styled.nav`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-weight: 400;
    font-size: 3rem;
    color: #ddd;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 42px;
  }

  li {
    list-style: none;

    & + li {
      margin-top: 42px;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    color: #f9f9f9;
    font-size: 2rem;
    transition: color 200ms;

    &:hover {
      color: ${shade(0.2, '#f9f9f9')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
