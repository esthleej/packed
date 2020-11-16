import React from 'react';
import Button from '../Button/Button';

import styled from 'styled-components';
import { IModalProps, MODAL_TYPE } from './ModalTypes';

const ModalContainer = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  .content {
    margin: 15% auto !important;
    width: 100vw;
    padding: 2rem !important;
    position: relative;
    background-color: white;

    @media (min-width: 400px) {
      width: 50vw;
    }

    .content-btns {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Modal = ({
  children,
  title,
  type,
  button,
  handleCancel,
  handleEnter,
}: IModalProps) => {
  return (
    <ModalContainer>
      <div className='content'>
        {title && <h1>{title}</h1>}
        {children}
        {type === MODAL_TYPE.WITH_DEFAULT_BUTTONS && (
          <div className='content-btns'>
            <Button primary onClick={handleEnter} type='submit'>
              {button}
            </Button>
            <Button
              style={{
                marginLeft: '2rem',
              }}
              type='button'
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
