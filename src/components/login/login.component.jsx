import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInStart } from '../../redux/user/user.actions';
import {
  Button,
  Container,
  Form,
  Heading,
  Input,
  Label,
  LoginContainer,
  SingupButton,
} from './login.styles';

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) return;
    dispatch(signInStart(user));
  };

  return (
    <Container>
      <LoginContainer>
        <Heading>Login</Heading>
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
          <Button onClick={handleSubmit}>Sign in</Button>
        </Form>
        <SingupButton to="/signup">Create new account</SingupButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
