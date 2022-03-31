import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import {
  Button,
  Container,
  Form,
  Heading,
  Input,
  Label,
  SignupContainer,
  SinginButton,
} from './signup.styles';

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) return;
    dispatch(signUpStart(user));
  };

  return (
    <Container>
      <SignupContainer>
        <Heading>Sign up</Heading>
        <Form>
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
          <Button onClick={handleSubmit}>Sign up</Button>
        </Form>
        <SinginButton to="/login">Sign in</SinginButton>
      </SignupContainer>
    </Container>
  );
};

export default Signup;
