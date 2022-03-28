import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

const textStyles = css`
  font-weight: 300;
  font-size: 1rem;
  color: #fff;
  text-transform: capitalized;
  letter-spacing: 1px;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const LoginButton = styled.a`
  ${textStyles}
  text-decoration: none;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfilePicture = styled.img`
  background-size: cover;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const WelcomeMsg = styled.span`
  ${textStyles}
`;

export const ProfileName = styled.span`
  ${textStyles}
`;
