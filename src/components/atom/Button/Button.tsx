import React, { ReactElement } from 'react';
import { IButtonProps, IButtonStyled } from './ButtonTypes';
import styled from 'styled-components';

const ButtonStyled = styled.button<IButtonStyled>`
  background: ${(props) =>
    props.primary ? 'palevioletred' : 'white'} !important;
  border-radius: 2px !important;
  border: 1px solid !important;
  border-color: ${(props) =>
    props.primary ? 'palevioletred' : props.color} !important;
  color: ${(props) => (props.primary ? 'white' : props.color)} !important;
  padding: 0.25em !important;
  font-size: 1.7rem !important;
  font-weight: 500 !important;
  &:hover {
    filter: brightness(87.5%) !important;
    background-color: ${(props) =>
      props.color === 'palevioletred'
        ? 'hsl(340deg 60% 65% / 19%)'
        : 'none'} !important;
  }
  :disabled {
    cursor: not-allowed;
    filter: brightness(87.5%);
  }
`;

const Button = ({
  onClick,
  primary = false,
  color = '#aaa',
  disabled = false,
  style,
  children,
}: IButtonProps): ReactElement => {
  return (
    <ButtonStyled
      primary={primary}
      color={color}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
