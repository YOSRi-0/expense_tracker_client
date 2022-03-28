import React from 'react';
import {
  HeaderContainer,
  InfoText,
  LoginButton,
  ProfileContainer,
  ProfileName,
  ProfilePicture,
  WelcomeMsg,
} from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      {/* <LoginButton to="/login">Login</LoginButton> */}
      <ProfileContainer>
        <ProfilePicture />
        <InfoText>
          <WelcomeMsg>Welcome Back,</WelcomeMsg>
          <ProfileName>Yosri</ProfileName>
        </InfoText>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
