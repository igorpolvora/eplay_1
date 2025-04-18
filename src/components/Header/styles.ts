import styled from "styled-components";
import { cores } from '../../styles';

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca}; 
    text-decoration: none;
    font-weight: bold;
  }

  div {
    align-items: center;
    display: flex;
  }
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 16px;
  justify-content: center;
  flex: 1;
`;

export const LinkItem = styled.li`

  text-align: center;
  min-width: max-content;
`;

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`;