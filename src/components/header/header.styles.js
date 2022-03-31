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
  justify-content: space-between;
  align-items: center;
  ${'' /* margin-bottom: 18px; */}
`;

export const LogoutButton = styled.button`
  ${textStyles}
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding-right: 10px;
`;

export const LoginButton = styled(Link)`
  ${textStyles}
  text-decoration: none;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfilePicture = styled.img`
  background-size: cover;
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* margin-left: 10px; */}
  padding-left: 10px;
`;

export const WelcomeMsg = styled.span`
  ${textStyles}
`;

export const ProfileName = styled.span`
  ${textStyles}
`;
