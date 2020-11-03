import {
  Constants,
  IDeleteModalVisibility,
  ISetSelectedCategory,
  ISelectedCategory,
  ISetSelectedItem,
  ISelectedItem,
} from './visibilityTypes';

export const setDeleteModalVisibility = (
  isVisible: boolean
): IDeleteModalVisibility => {
  return {
    type: Constants.SET_DELETE_MODAL_VISIBILITY,
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
