import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  font-size: 1rem;
`;
