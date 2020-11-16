import {
  Constants,
  ISetEditCategoryModalVisibility,
  ISetDeleteCategoryModalVisibility,
  ISetDeleteItemModalVisibility,
  ISetSelectedCategory,
  ISelectedCategory,
  ISetSelectedItem,
  ISelectedItem,
} from './visibilityTypes';

export const setEditCategoryModalVisibility = (
  isVisible: boolean
): ISetEditCategoryModalVisibility => {
  return {
    type: Constants.SET_EDIT_CATEGORY_MODAL_VISIBILITY,
    payload: isVisible,
  };
};

export const setDeleteCategoryModalVisibility = (
  isVisible: boolean
): ISetDeleteCategoryModalVisibility => {
  return {
    type: Constants.SET_DELETE_CATEGORY_MODAL_VISIBILITY,
    payload: isVisible,
  };
};

export const setDeleteItemModalVisibility = (
  isVisible: boolean
): ISetDeleteItemModalVisibility => {
  return {
    type: Constants.SET_DELETE_ITEM_MODAL_VISIBILITY,
    payload: isVisible,
  };
};

export const setSelectedCategory = (
  category: ISelectedCategory
): ISetSelectedCategory => {
  return {
    type: Constants.SET_SELECTED_CATEGORY,
    payload: category,
  };
};

export const setSelectedItem = (item: ISelectedItem): ISetSelectedItem => {
  return {
    type: Constants.SET_SELECTED_ITEM,
    payload: item,
  };
};
