import { CSSProperties, ReactNode } from 'react';

export interface IButtonStyled {
  primary: boolean;
  color: string;
}

export interface IButtonProps {
  onClick: (e?: any) => void;
  primary?: boolean;
  color?: string;
  disabled?: boolean;
  style?: CSSProperties | undefined;
  children: ReactNode;
}
