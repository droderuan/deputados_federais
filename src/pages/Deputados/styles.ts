import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  div.aside-wrapper {
    position: sticky;
    top: 0;
  }
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
  background: #f6f6f6;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

  ul {
    list-style: none;
  }

  div.partido {
    display: flex;
    align-items: center;

    & + div {
      margin-bottom: 3rem;
    }

    span {
      font-size: 2rem;
      color: #606060;
    }
    hr {
      margin-left: 1rem;
      flex: 1;
    }
  }

  div.list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 152px;
  display: flex;
  margin: 20px;
  cursor: pointer;

  background: #fdfdfd;
  color: #bfbfbf;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-in-out;

  &:hover {
    color: #0f2d68;
    box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
    transform: translateY(-10px);
  }

  img {
    height: 152px;
    width: 114px;
  }

  div.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;

    svg {
      margin-left: auto;
    }

    div.info {
      span {
        color: #686868;
        font-size: 1.2rem;
      }
      p {
        margin-bottom: 5px;
        color: #0e0e0e;
        font-size: 1.6rem;
      }
    }
  }
`;
