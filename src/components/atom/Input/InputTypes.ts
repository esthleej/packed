export enum INPUT_TYPE {
  ITEM = 'ITEM',
  CATEGORY = 'CATEGORY',
  ADD_ITEM = 'ADD_ITEM',
}

export interface IInputContainerStyled {
  item: boolean;
}

export interface IInputProps {
  type: INPUT_TYPE;
  id: string;
  text?: string;
  handleCancel: (value?: boolean) => void;
  handleEnter: (value: string) => void;
  onClick?: () => void;
}
