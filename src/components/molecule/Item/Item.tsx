import React, { ReactElement, useState, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import Input from '../../atom/Input/Input';
import { IItemProps, ITextStyled } from './ItemTypes';
import { INPUT_TYPE } from '../../atom/Input/InputTypes';

const TrashIcon = require('../../../images/icons/trash.svg') as string;
const EditIcon = require('../../../images/icons/pencil-alt.svg') as string;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  &:hover .item-options {
    visibility: visible;
  }
`;

const CheckBox = styled.div`
  position: relative;

  & label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 20px;
  }

  & label:after {
    border: 2px solid black;
    border-top: none;
    border-right: none;
    content: '';
    height: 5px;
    left: 3px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transition-duration: 0.2s;
    transform: rotate(-45deg);
    width: 12px;
  }

  input[type='checkbox'] {
    visibility: hidden;
  }

  & input[type='checkbox']:checked + label {
    background-color: #e2e8f0;
    border-color: #e2e8f0;
  }

  & input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`;

const Text = styled.div<ITextStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    text-decoration: ${(props) =>
      props.strikeThrough ? `line-through` : `none`};
    padding-left: 2rem;
    font-size: 2rem;
  }

  .item-options {
    visibility: hidden;

    img {
      width: 2.5rem;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const Item = ({
  category,
  index,
  id,
  item,
  checked,
  handleInputOpen,
  handleInputClose,
  selectedCategory,
  setSelectedCategory,
  selectedItem,
  setSelectedItem,
  isDeleteModalVisible,
  setDeleteModalVisibility,
  editTravelItem,
}: IItemProps): ReactElement => {
  const [isCompleted, setCompleted]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(checked);

  const handleSelect = (): void => {
    setSelectedItem({ name: item, id, index });
    setSelectedCategory(category);
  };

  const handleDeleteVisibility = (): void => {
    setDeleteModalVisibility(true);
  };

  const handleEditVisibility = (): void => {
    handleInputOpen(false, '');
  };

  const handleCheckItem = (): void => {
    editTravelItem(
      category,
      { name: item, id },
      {
        item: item,
        isCompleted: !isCompleted,
      }
    );
    setCompleted(!isCompleted);
  };

  const handleEditItem = (value: string): void => {
    editTravelItem(selectedCategory, selectedItem, {
      item: value,
      isCompleted,
    });
  };

  return selectedItem.id == id &&
    selectedCategory.name === category.name &&
    isDeleteModalVisible === false ? (
    <Input
      type={INPUT_TYPE.ITEM}
      handleCancel={handleInputClose}
      handleEnter={handleEditItem}
      id={item}
      text={item}
    />
  ) : (
    <CheckBoxWrapper>
      <CheckBox>
        <input
          type='checkbox'
          value={item}
          id={id}
          onClick={handleCheckItem}
          defaultChecked={isCompleted}
        />
        <label htmlFor={id} />
      </CheckBox>

      <Text strikeThrough={isCompleted} onClick={handleSelect}>
        <div>{item}</div>
        <div className='item-options'>
          <button onClick={handleDeleteVisibility}>
            <img alt='trash icon' src={TrashIcon} />
          </button>
          <button onClick={handleEditVisibility}>
            <img alt='edit icon' src={EditIcon} />
          </button>
        </div>
      </Text>
    </CheckBoxWrapper>
  );
};

export default Item;
