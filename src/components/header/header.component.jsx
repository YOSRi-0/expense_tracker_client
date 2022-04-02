import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  HeaderContainer,
  InfoText,
  LoginButton,
  LogoutButton,
  ProfileContainer,
  ProfileName,
  ProfilePicture,
  WelcomeMsg,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <HeaderContainer>
      {currentUser ? (
        <>
          <ProfileContainer>
            {/* <ProfilePicture alt="profil picture" /> */}
            <InfoText>
              <WelcomeMsg>Welcome Back,</WelcomeMsg>
              <ProfileName>{currentUser.username}</ProfileName>
            </InfoText>
          </ProfileContainer>
          <LogoutButton onClick={() => dispatch(signOutStart())}>
            Logout
          </LogoutButton>
        </>
      ) : (
        <LoginButton to="/login">Login</LoginButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
