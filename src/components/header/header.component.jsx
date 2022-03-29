import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
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
  const currentUser = useSelector(selectCurrentUser);

  return (
    <HeaderContainer>
      {currentUser ? (
        <ProfileContainer>
          <ProfilePicture />
          <InfoText>
            <WelcomeMsg>Welcome Back,</WelcomeMsg>
            <ProfileName>Yosri</ProfileName>
          </InfoText>
        </ProfileContainer>
      ) : (
        <LoginButton to="/login">Login</LoginButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
