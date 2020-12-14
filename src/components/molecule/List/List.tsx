import React, {
  Dispatch,
  Fragment,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { connect } from 'react-redux';

import Menu from '../../atom/Menu/Menu';
import Input from '../Input/Input';
import Item from '../Item/Item';

import { INPUT_TYPE } from '../Input/InputTypes';
import { IListContainerStyled, IListProps } from './ListTypes';
import { IStoreState } from '../../../redux/rootReducer';

import styled from 'styled-components';

import {
  setSelectedCategory,
  setSelectedItem,
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
} from '../../../redux/visibility/visibilityActions';

import {
  addTravelItem,
  editTravelItem,
} from '../../../redux/travel/travelActions';

const ChevronUpIcon = require('../../../images/icons/chevron-up.svg') as string;

const mapStateToProps = ({ visibility }: IStoreState) => ({
  selectedCategory: visibility.selectedCategory,
  selectedItem: visibility.selectedItem,
  isDeleteItemModalVisible: visibility.isDeleteItemModalVisible,
});

const mapDispatchToProps = {
  setSelectedCategory,
  setSelectedItem,
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
  addTravelItem,
  editTravelItem,
};

const ListContainer = styled.div<IListContainerStyled>`
  .title {
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 0rem 0.5rem;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-left: 24px;
    img {
      width: 20px;
      transition: 0.2s;
      transform: ${(props) =>
        props.accordion ? 'rotate(0deg)' : 'rotate(-180deg)'};
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }
  }
  .list {
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    visibility: ${(props) => (props.accordion ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.accordion ? '1' : '0')};
    height: ${(props) => (props.accordion ? props.height : '0')};
    overflow: hidden;
    transition: all 0.3s;
    margin: 0px 24px;
    hr {
      border-top: 1px solid #f0f0f0;
    }
    button {
      border: none;
      background: white;
      padding: 0.5rem;
      font-size: 1.7rem;
      &:hover {
        color: palevioletred;
      }
    }
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    visibility: hidden;
    align-self: center;
    align-items: center;
  }
  &:hover div {
    visibility: visible;
  }
`;

const List = ({
  list,
  category,
  selectedCategory,
  setSelectedCategory,
  selectedItem,
  setSelectedItem,
  isDeleteItemModalVisible,
  setDeleteItemModalVisibility,
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
  addTravelItem,
  editTravelItem,
}: IListProps): ReactElement => {
  const [isAccordionOpen, setAccodionOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(true);

  const [inputHeight, setInputHeight]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(0);

  const heightWithInput = (list.length + 1) * 50 + inputHeight;
  const defaultHeight = (list.length + 1) * 50;
  const totalItems = list.length;

  const completedItems = list.filter(({ isCompleted }) => isCompleted === true)
    .length;

  const handleInputOpen = (isAddItemOpen: boolean, item: string): void => {
    if (isAddItemOpen) {
      setInputHeight(75);
      setSelectedItem({ name: item });
      setSelectedCategory(category);
    }
    if (!isAddItemOpen) {
      setInputHeight(0);
    }
  };

  const handleInputClose = (): void => {
    setInputHeight(0);
    setSelectedItem({ name: '' });
    setSelectedCategory({ name: '', index: 0, categoryId: '' });
  };

  const handleAddItem = (value: string): void => {
    addTravelItem(selectedCategory, value);
  };

  const handleAccordion = (): void => {
    setAccodionOpen(!isAccordionOpen);
    if (isAccordionOpen === false) {
      setSelectedItem({ name: '' });
      setInputHeight(0);
    }
  };

  const item = list.map(({ item, isCompleted, itemId }, index) => {
    return (
      <Fragment key={itemId}>
        <Item
          category={category}
          itemId={itemId}
          item={item}
          index={index}
          handleInputOpen={handleInputOpen}
          handleInputClose={handleInputClose}
          checked={isCompleted}
          isDeleteItemModalVisible={isDeleteItemModalVisible}
          setDeleteItemModalVisibility={setDeleteItemModalVisibility}
          editTravelItem={editTravelItem}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <hr />
      </Fragment>
    );
  });

  return (
    <ListContainer
      accordion={isAccordionOpen}
      height={
        selectedCategory.categoryId === category.categoryId
          ? `${heightWithInput}px`
          : `${defaultHeight}px`
      }
    >
      <CategoryContainer>
        <div className='title' onClick={handleAccordion}>
          <h2>
            {category.name}&nbsp;({completedItems}/{totalItems})
          </h2>
          <img alt='chevron-up' src={ChevronUpIcon} />
        </div>
        <Menu
          item={category}
          setSelectedItem={setSelectedCategory}
          setEditModalVisibility={setEditCategoryModalVisibility}
          setDeleteModalVisibility={setDeleteCategoryModalVisibility}
        />
      </CategoryContainer>

      <div className='list' id={category.name}>
        {item}
        {selectedItem.name === `add-item-${category.name}` &&
        selectedCategory.categoryId === category.categoryId ? (
          <Input
            type={INPUT_TYPE.DEFAULT}
            placeholder='Add an item'
            buttonText='Add Item'
            handleCancel={handleInputClose}
            handleEnter={handleAddItem}
            id={`add-item-${category.name}`}
          />
        ) : (
          <button
            onClick={() => handleInputOpen(true, `add-item-${category.name}`)}
            type='button'
          >
            + Add Item
          </button>
        )}
      </div>
    </ListContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
