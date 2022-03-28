import styled, { keyframes, css } from 'styled-components';

export const SelectContainer = styled.div``;
export const Select = styled.div`
  position: relative;
  border: 1px solid #757a7f;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${({ isActive, isSelectedValue }) =>
    isActive || isSelectedValue
      ? `
    border-color: #f2f2f2;
    & > span {
      color: #f2f2f2;
    }
  `
      : ''}
`;

export const ArrowDownContainer = styled.div`
  content: '';
  background-image: url('../../assets/arrow-down.svg');
  width: 8px;
  height: 7px;
  position: absolute;
  top: calc(50% - 0.45em);
  right: 5%;
  transform: translateY(-50%);

  & > * path {
    fill: #757a7f;
  }

  ${({ isActive, isSelectedValue }) =>
    isActive || isSelectedValue
      ? `
  & > * path {
    fill: #f2f2f2;
    }
  `
      : ''}
`;

export const SelectDefaultValue = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #757a7f;

  position: absolute;
  top: calc(25%);
  left: 5%;

  ${({ isSelectedValue }) =>
    isSelectedValue
      ? `
    font-size: .7rem;
    background-color: #303234;
    padding: 0 0.3em;
    top:-20%;
  `
      : ''}
`;

const TextSlideUp = keyframes`
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeInAnimation = css`
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: ease-out;
  display: flex;
  opacity: 1;
`;

export const Options = styled.div`
  width: calc(100% + 2px);
  background-color: #f2f2f2;
  border-radius: 5px;
  display: none;
  opacity: 0;
  flex-direction: column;
  overflow: hidden;

  position: absolute;
  top: 105%;
  left: 0;

  ${({ isActive }) => (isActive ? FadeInAnimation : '')}
`;

export const Option = styled.span`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: 400;
  color: #303234;
  display: flex;
  align-items: center;
  padding-left: 5%;

  &:hover,
  &:focus {
    background-color: #c5c5c5;
  }
`;
