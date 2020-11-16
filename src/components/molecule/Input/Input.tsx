import React, {
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
  SetStateAction,
  FormEvent,
  Dispatch,
} from 'react';
import Button from '../../atom/Button/Button';
import { INPUT_TYPE, IInputContainerStyled, IInputProps } from './InputTypes';

import styled from 'styled-components';

const CheckIcon = require('../../../images/icons/check.svg') as string;
const XIcon = require('../../../images/icons/x.svg') as string;

const InputContainer = styled.form<IInputContainerStyled>`
  display: ${(props) => (props.default ? 'inherit' : 'flex')};
  input {
    width: 100%;
    border: ${(props) => (props.default ? '1px solid #ddd' : '1px solid #fff')};
    border-radius: ${(props) => (props.default ? '5px' : 'none')};
    padding: ${(props) => (props.default ? '1rem' : 0)};
    cursor: text;
    margin-bottom: ${(props) => (props.default ? '1rem' : 0)};
    font-size: ${(props) => (props.default ? '1.5rem' : '2rem')};

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
  placeholder,
  buttonText,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!value) {
      return;
    } else {
      handleEnter(value);
      handleCancel(false);
    }
  };

  return (
    <InputContainer
      onSubmit={handleSubmit}
      default={type === INPUT_TYPE.DEFAULT}
    >
      <input
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        id={id}
      />

      {type === INPUT_TYPE.DEFAULT ? (
        <div className='input-bottom'>
          <Button
            onClick={handleSubmit}
            primary
            disabled={value === ''}
            type='submit'
          >
            {buttonText}
          </Button>
          <Button
            style={{
              marginLeft: '2rem',
            }}
            onClick={() => {
              handleCancel(false);
            }}
            type='button'
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className='input-bottom'>
          <button disabled={value === ''} type='submit'>
            <img alt='save' src={CheckIcon} />
          </button>

          <button
            onClick={() => {
              handleCancel(false);
            }}
          >
            <img alt='cancel' src={XIcon} />
          </button>
        </div>
      )}
    </InputContainer>
  );
};

export default Input;
