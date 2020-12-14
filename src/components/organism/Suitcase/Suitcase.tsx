import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../atom/Button/Button';
import List from '../../molecule/List/List';
import Input from '../../molecule/Input/Input';
import Modal from '../../atom/Modal/Modal';

import {
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
  setDeleteItemModalVisibility,
  setSelectedCategory,
} from '../../../redux/visibility/visibilityActions';

import {
  addTravelCategory,
  editTravelCategory,
  deleteTravelCategory,
  deleteTravelItem,
} from '../../../redux/travel/travelActions';

import { IStoreState } from '../../../redux/rootReducer';
import { MODAL_TYPE } from '../../atom/Modal/ModalTypes';
import { INPUT_TYPE } from '../../molecule/Input/InputTypes';
import { ISuitCaseProps } from './SuitcaseTypes';

import styled from 'styled-components';

const TravelImg = require('../../../images/travel.svg') as string;

const mapStateToProps = ({ visibility, travel }: IStoreState) => ({
  isEditCategoryModalVisible: visibility.isEditCategoryModalVisible,
  isDeleteCategoryModalVisible: visibility.isDeleteCategoryModalVisible,
  isDeleteItemModalVisible: visibility.isDeleteItemModalVisible,
  selectedItem: visibility.selectedItem,
  selectedCategory: visibility.selectedCategory,
  lists: travel.lists,
});

const mapDispatchToProps = {
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
  setDeleteItemModalVisibility,
  setSelectedCategory,
  deleteTravelItem,
  addTravelCategory,
  editTravelCategory,
  deleteTravelCategory,
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
  margin: 0px 24px;
`;

const Category = styled.div`
  padding: 0.5rem 0.5rem;
  padding: 0;
`;

const EmptyListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0rem;
  font-size: 18px;

  img {
    padding: 2rem;
  }

  h3 {
    font-weight: 400 !important;
  }

  h5 {
    font-weight: 200 !important;
    color: #616161;
  }
`;

function Suitcase({
  lists,
  deleteTravelItem,
  addTravelCategory,
  editTravelCategory,
  deleteTravelCategory,
  isEditCategoryModalVisible,
  isDeleteCategoryModalVisible,
  isDeleteItemModalVisible,
  setEditCategoryModalVisibility,
  setDeleteCategoryModalVisibility,
  setDeleteItemModalVisibility,
  selectedItem,
  selectedCategory,
  setSelectedCategory,
}: ISuitCaseProps): ReactElement {
  const [isAddCategoryModalOpen, setAddCategoryModalOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const list =
    lists.length !== 0 ? (
      lists.map(({ category, list, categoryId }, index) => {
        return (
          <Category key={categoryId}>
            <List
              category={{ name: category, categoryId, index }}
              list={list}
              setDeleteItemModalVisibility={setDeleteItemModalVisibility}
            />
          </Category>
        );
      })
    ) : (
      <EmptyListContainer>
        <img src={TravelImg} alt='travel' height='200px' />
        <h3>So empty...</h3>
        <h5>Add a category and start packing today!</h5>
      </EmptyListContainer>
    );

  const handleDeleteItemModalCancel = (): void => {
    setSelectedCategory({ name: '', index: 0 });
    setDeleteItemModalVisibility(false);
  };

  const handleDeleteItemModalEnter = (): void => {
    deleteTravelItem(selectedCategory, selectedItem);
    handleDeleteItemModalCancel();
  };

  const handleAddCategory = (value: string): void => {
    addTravelCategory(value);
  };

  const handleEditCategory = (value: string): void => {
    editTravelCategory(selectedCategory, value);
  };

  const handleDeleteCategory = (): void => {
    deleteTravelCategory(selectedCategory);
    setDeleteCategoryModalVisibility(false);
  };

  return (
    <SuitcaseContainer>
      <Header>
        <h2>Suitcase</h2>
        <Button
          type='button'
          color='palevioletred'
          onClick={() => setAddCategoryModalOpen(true)}
        >
          + Add Category
        </Button>
      </Header>
      <div className='content'>{list}</div>
      {isDeleteItemModalVisible && (
        <Modal
          handleCancel={handleDeleteItemModalCancel}
          handleEnter={handleDeleteItemModalEnter}
          type={MODAL_TYPE.WITH_DEFAULT_BUTTONS}
          button='Delete'
        >
          <h2>
            Are you sure you want to delete item:&nbsp;
            <strong>{selectedItem.name}?</strong>
          </h2>
        </Modal>
      )}

      {isAddCategoryModalOpen && (
        <Modal title='Add Category' type={MODAL_TYPE.WO_DEFAULT_BUTTONS}>
          <Input
            handleCancel={() => setAddCategoryModalOpen(false)}
            handleEnter={handleAddCategory}
            placeholder='Add a category'
            type={INPUT_TYPE.DEFAULT}
            buttonText='Add Category'
            id='add-category'
          />
        </Modal>
      )}
      {isEditCategoryModalVisible && (
        <Modal title='Edit Category' type={MODAL_TYPE.WO_DEFAULT_BUTTONS}>
          <Input
            handleCancel={() => setEditCategoryModalVisibility(false)}
            placeholder='Edit Category'
            handleEnter={handleEditCategory}
            type={INPUT_TYPE.DEFAULT}
            text={selectedCategory.name}
            buttonText='Edit Category'
            id='add-category'
          />
        </Modal>
      )}
      {isDeleteCategoryModalVisible && (
        <Modal
          handleCancel={() => setDeleteCategoryModalVisibility(false)}
          handleEnter={handleDeleteCategory}
          type={MODAL_TYPE.WITH_DEFAULT_BUTTONS}
          button='Delete'
        >
          <h2>
            Are you sure you want to delete category:&nbsp;
            <strong>{selectedCategory.name}?</strong>
          </h2>
        </Modal>
      )}
    </SuitcaseContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Suitcase);
