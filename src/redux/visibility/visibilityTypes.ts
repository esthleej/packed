export enum Constants {
  SET_DELETE_MODAL_VISIBILITY = 'SET_DELETE_MODAL_VISIBILITY',
  SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY',
  SET_SELECTED_ITEM = 'SET_SELECTED_ITEM',
}

export interface IDeleteModalVisibility {
  type: Constants.SET_DELETE_MODAL_VISIBILITY;
  payload: boolean;
}

export interface ISetSelectedCategory {
  type: Constants.SET_SELECTED_CATEGORY;
  payload: ISelectedCategory;
}

export type ISelectedCategory = {
  name: string;
  index: number;
};

export type ISelectedItem = {
  id?: number | string | null;
  name: string;
  index?: number | null;
};

export interface ISetSelectedItem {
  type: Constants.SET_SELECTED_ITEM;
  payload: ISelectedItem;
}

export interface IVisibilityState {
  readonly isDeleteModalVisible: boolean;
  readonly selectedCategory: ISelectedCategory;
  readonly selectedItem: ISelectedItem;
}

export type Actions =
  | IDeleteModalVisibility
  | ISetSelectedCategory
  | ISetSelectedItem;
