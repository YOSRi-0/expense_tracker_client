import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpFailure, signUpStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';
import {
  Button,
  Container,
  Error,
  Form,
  Heading,
  Input,
  Label,
  SignupContainer,
  SinginButton,
} from './signup.styles';

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '', username: '' });
  const errorMessage = useSelector(selectUserError);

  if (errorMessage) {
    setTimeout(() => {
      dispatch(signUpFailure(null));
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password) {
      dispatch(signUpFailure({ message: 'Please fill the form' }));
      return;
    }
    dispatch(signUpStart(user));
  };

  return (
    <Container>
      <SignupContainer>
        <Heading>Sign up</Heading>
        <Form>
          <Label htmlFor="username">Email</Label>
          <Input
            type="text"
            value={user.username}
            placeholder="Enter your username"
            autoComplete="off"
            id="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            value={user.email}
            placeholder="Enter your email"
            autoComplete="off"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={user.password}
            placeholder="Enter your password"
            autoComplete="off"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {errorMessage && <Error>{errorMessage}</Error>}
          <Button onClick={handleSubmit}>Sign up</Button>
        </Form>
        <SinginButton to="/login">Sign in</SinginButton>
      </SignupContainer>
    </Container>
  );
};

export default Signup;
