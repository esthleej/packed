import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../atom/Button/Button';
import List from '../../molecule/List/List';
import Input from '../../atom/Input/Input';
import Modal from '../../atom/Modal/Modal';

import {
  setDeleteModalVisibility,
  setSelectedCategory,
} from '../../../redux/visibility/visibilityActions';

import {
  deleteTravelItem,
  addTravelCategory,
} from '../../../redux/travel/travelActions';

import { IStoreState } from '../../../redux/rootReducer';
import { MODAL_TYPE } from '../../atom/Modal/ModalTypes';
import { INPUT_TYPE } from '../../atom/Input/InputTypes';
import { ISuitCaseProps } from './SuitcaseTypes';

import styled from 'styled-components';

const mapStateToProps = ({ visibility, travel }: IStoreState) => ({
  isDeleteModalVisible: visibility.isDeleteModalVisible,
  selectedItem: visibility.selectedItem,
  selectedCategory: visibility.selectedCategory,
  lists: travel.lists,
});

const mapDispatchToProps = {
  setDeleteModalVisibility,
  setSelectedCategory,
  deleteTravelItem,
  addTravelCategory,
};

const SuitcaseContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem;

  .content {
    border: 1px solid white;
    padding: 1rem 1rem 0.5rem 1rem;
    padding: 0rem;
    margin-top: 0.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.div`
  padding: 0.5rem 0.5rem;
  padding: 0;
`;

function Suitcase({
  lists,
  deleteTravelItem,
  addTravelCategory,
  isDeleteModalVisible,
  setDeleteModalVisibility,
  selectedItem,
  selectedCategory,
  setSelectedCategory,
}: ISuitCaseProps): ReactElement {
  const [isAddCategoryOpen, setAddCategoryOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const list = lists.map(({ category, list }, index) => {
    return (
      <Category key={category}>
        <List
          category={{ name: category, index }}
          list={list}
          setDeleteModalVisibility={setDeleteModalVisibility}
        />
      </Category>
    );
  });

  const handleDeleteModalCancel = (): void => {
    setSelectedCategory({ name: '', index: 0 });
    setDeleteModalVisibility(false);
  };

  const handleDeleteModalEnter = (): void => {
    deleteTravelItem(selectedCategory, selectedItem);
    handleDeleteModalCancel();
  };

  const handleAddCategory = (value: string): void => {
    addTravelCategory(value);
  };

  return (
    <SuitcaseContainer>
      <Header>
        <h2>Suitcase</h2>
        <Button color='palevioletred' onClick={() => setAddCategoryOpen(true)}>
          + Add Category
        </Button>
      </Header>
      <div className='content'>{list}</div>
      {isDeleteModalVisible && (
        <Modal
          handleCancel={handleDeleteModalCancel}
          handleEnter={handleDeleteModalEnter}
          type={MODAL_TYPE.WITH_DEFAULT_BUTTONS}
          button='Delete'
        >
          <h1>
            Are you sure you want to delete:&nbsp;
            <strong>{selectedItem.name}?</strong>
          </h1>
        </Modal>
      )}

      {isAddCategoryOpen && (
        <Modal title='Add Category' type={MODAL_TYPE.WO_DEFAULT_BUTTONS}>
          <Input
            handleCancel={() => setAddCategoryOpen(false)}
            handleEnter={handleAddCategory}
            type={INPUT_TYPE.CATEGORY}
            id='add-category'
          />
        </Modal>
      )}
    </SuitcaseContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Suitcase);
