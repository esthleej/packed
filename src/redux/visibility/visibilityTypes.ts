export enum Constants {
  SET_EDIT_CATEGORY_MODAL_VISIBILITY = 'SET_EDIT_CATEGORY_MODAL_VISIBILITY',
  SET_DELETE_CATEGORY_MODAL_VISIBILITY = 'SET_DELETE_CATEGORY_MODAL_VISIBILITY',
  SET_DELETE_ITEM_MODAL_VISIBILITY = 'SET_DELETE_ITEM_MODAL_VISIBILITY',
  SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY',
  SET_SELECTED_ITEM = 'SET_SELECTED_ITEM',
}

export interface ISetEditCategoryModalVisibility {
  type: Constants.SET_EDIT_CATEGORY_MODAL_VISIBILITY;
  payload: boolean;
}

export interface ISetDeleteCategoryModalVisibility {
  type: Constants.SET_DELETE_CATEGORY_MODAL_VISIBILITY;
  payload: boolean;
}

export interface ISetDeleteItemModalVisibility {
  type: Constants.SET_DELETE_ITEM_MODAL_VISIBILITY;
  payload: boolean;
}

export interface ISetSelectedCategory {
  type: Constants.SET_SELECTED_CATEGORY;
  payload: ISelectedCategory;
}

export type ISelectedCategory = {
  categoryId?: number | string | null;
  name: string;
  index: number;
};

export type ISelectedItem = {
  itemId?: number | string | null;
  name: string;
  index?: number | null;
};

export interface ISetSelectedItem {
  type: Constants.SET_SELECTED_ITEM;
  payload: ISelectedItem;
}

export interface IVisibilityState {
  readonly isEditCategoryModalVisible: boolean;
  readonly isDeleteCategoryModalVisible: boolean;
  readonly isDeleteItemModalVisible: boolean;
  readonly selectedCategory: ISelectedCategory;
  readonly selectedItem: ISelectedItem;
}

export type Actions =
  | ISetEditCategoryModalVisibility
  | ISetDeleteCategoryModalVisibility
  | ISetDeleteItemModalVisibility
  | ISetSelectedCategory
  | ISetSelectedItem;
