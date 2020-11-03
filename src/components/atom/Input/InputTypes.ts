export enum INPUT_TYPE {
  ITEM = 'item',
  CATEGORY = 'category',
}

export interface IInputContainerStyled {
  item: boolean;
}

export interface IInputProps {
  type: INPUT_TYPE;
  id: string;
  text?: string;
  handleCancel: (value?: any) => void;
  handleEnter: (value?: any) => void;
  onClick?: () => void;
}
