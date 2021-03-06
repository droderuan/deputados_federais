import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const MainContent = styled.div`
  height: 100%;
  flex: 1;
  padding: 46px;

  nav {
    height: 8%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 0;
      margin: 0 1rem;
      padding: 0.5rem;
      border-radius: 2px;
      background: inherit;
      background: #808e95;
      color: #dfdfdf;
    }
  }

  div.content {
    padding: 5rem 10rem;
    height: 92%;
    display: flex;
    flex-wrap: wrap;

    div.card {
      margin: 2rem;
      padding: 1rem;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #b0bec5;
      border: 1px solid #a0aeb5;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      transition: all 200ms ease-in;

      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-10px);
      }

      img {
        margin-right: 2rem;
        height: 152px;
        width: 114px;
        border: 2px solid #fff;
      }

      div.wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      span {
        font-size: 1.6rem;
        color: #6f6f6f;
      }

      p {
        font-weight: 600;
        font-size: 2rem;
        color: #000;
      }
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;

  div.searchInput {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #c3c1c1;

    input {
      font-size: 1.7rem;
      flex: 1;
      color: #000;
      border: 0;
      background: transparent;

      &::placeholder {
        color: #c3c1c1;
      }
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  div.deputado-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      clip-path: circle(100px at 50% 45%);
    }

    h2 {
      font-size: 4rem;
      color: #404040;
    }
    hr {
      margin-top: 1rem;
      width: 90%;
      color: #606060;
    }
  }

  div.info {
    width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      padding: 0 3rem;
      margin: 1rem 0 0.5rem;
      font-size: 2rem;
      color: #606060;
    }

    div.label {
      width: 50%;
      padding: 1rem 3rem;
      span {
        color: #686868;
        font-size: 1.4rem;
      }
      p {
        margin-bottom: 5px;
        color: #0e0e0e;
        font-size: 1.8rem;
      }
    }

    div.info-pessoa {
      display: flex;
      flex-wrap: wrap;
    }

    div.info-gabinete {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
