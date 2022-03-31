import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f4f4f3;
`;

// export const SignupContainer = styled.div``;

// export const Backdrop = styled.div`
//   background: rgba(0, 0, 0, 0.25);
//   width: 100%;
//   min-height: 100vh;
// `;

export const SignupContainer = styled.div`
  width: 400px;
  min-width: 300px;
  background-color: #f4f4f3;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px 50px;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Heading = styled.h3`
  color: #303234;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 35px;
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #555664;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #303234;
  padding: 12px;
  width: 100%;
  color: #f4f4f3;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: #000;
    transform: translateY(-1px);
  }
`;

export const SinginButton = styled(Link)`
  text-decoration: none;
  color: #303234;
  text-align: center;
  font-size: 1rem;
  display: block;
  margin-top: 30px;

  &:hover,
  &:focus {
    text-decoration: underline;
    font-weight: 500;
  }
`;
