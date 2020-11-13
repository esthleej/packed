import React, {
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
  SetStateAction,
  FormEvent,
  Dispatch,
} from 'react';
import Button from '../Button/Button';
import { INPUT_TYPE, IInputContainerStyled, IInputProps } from './InputTypes';

import styled from 'styled-components';

const CheckIcon = require('../../../images/icons/check.svg') as string;
const XIcon = require('../../../images/icons/x.svg') as string;

const InputContainer = styled.form<IInputContainerStyled>`
  display: ${(props) => (props.item ? 'flex' : 'inherit')};
  input {
    width: 100%;
    border: ${(props) => (props.item ? '1px solid #fff' : '1px solid #ddd')};
    border-radius: ${(props) => (props.item ? 'none' : '5px')};
    padding: ${(props) => (props.item ? 0 : '1rem')};
    cursor: text;
    margin-bottom: ${(props) => (props.item ? 0 : '1rem')};
    font-size: ${(props) => (props.item ? '2rem' : '1.5rem')};

    :focus {
      outline: none;
    }
  }

  .input-bottom {
    display: flex;

    img {
      width: 2.5rem;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const Input = ({
  type,
  id,
  text = '',
  handleCancel,
  handleEnter,
}: IInputProps): ReactElement => {
  const [value, setValue]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>(text);

  useEffect((): void => {
    const input = document.getElementById(id);
    if (input !== null) {
      input.focus();
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      return;
    } else {
      handleEnter(value);
      handleCancel(false);
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit} item={type === INPUT_TYPE.ITEM}>
      <input
        placeholder={
          type === INPUT_TYPE.CATEGORY ? 'Add a category' : 'Add an item'
        }
        onChange={handleChange}
        value={value}
        id={id}
      />

      {type !== INPUT_TYPE.ITEM ? (
        <div className='input-bottom'>
          <Button onClick={handleSubmit} primary disabled={value === ''}>
            {type === INPUT_TYPE.CATEGORY ? 'Add category' : 'Add item'}
          </Button>
          <Button
            style={{
              marginLeft: '2rem',
            }}
            onClick={() => {
              handleCancel(false);
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className='input-bottom'>
          <button disabled={value === ''} type='submit'>
            <img alt='save-icon' src={CheckIcon} />
          </button>

          <button
            onClick={() => {
              handleCancel(false);
            }}
          >
            <img alt='cancel-icon' src={XIcon} />
          </button>
        </div>
      )}
    </InputContainer>
  );
};

export default Input;
