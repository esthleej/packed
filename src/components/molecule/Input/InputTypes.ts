export enum INPUT_TYPE {
  DEFAULT = 'DEFAULT',
  SECONDARY = 'SECONDARY',
}

export interface IInputContainerStyled {
  default: boolean;
}

export interface IInputProps {
  type: INPUT_TYPE;
  id: string;
  text?: string;
  placeholder: string;
  buttonText: string;
  handleCancel: (value?: boolean) => void;
  handleEnter: (value: string) => void;
  onClick?: () => void;
}
