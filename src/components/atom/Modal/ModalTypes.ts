import { ReactNode } from 'react';

export enum MODAL_TYPE {
  WITH_DEFAULT_BUTTONS = 'withDefaultButtons',
  WO_DEFAULT_BUTTONS = 'withoutDefaultButtons',
}

export interface IModalProps {
  type: MODAL_TYPE;
  title?: string;
  button?: ReactNode;
  handleCancel?: () => void;
  handleEnter?: () => void;
  children: ReactNode;
}
