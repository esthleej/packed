import {
  IAddTravelItem,
  IEditTravelItem,
  IListItemDetail,
} from '../../../redux/travel/travelTypes';

import {
  ISetDeleteItemModalVisibility,
  ISetEditCategoryModalVisibility,
  ISetDeleteCategoryModalVisibility,
  ISelectedCategory,
  ISelectedItem,
  ISetSelectedCategory,
  ISetSelectedItem,
} from '../../../redux/visibility/visibilityTypes';

export interface IListContainerStyled {
  accordion: boolean;
  height: string;
}

export interface IListProps {
  list: IListItemDetail[];
  category: ISelectedCategory;
  selectedCategory: ISelectedCategory;
  setSelectedCategory: (category: ISelectedCategory) => ISetSelectedCategory;
  selectedItem: ISelectedItem;
  setSelectedItem: (item: ISelectedItem) => ISetSelectedItem;
  isDeleteItemModalVisible: boolean;
  setDeleteItemModalVisibility: (
    isVisible: boolean
  ) => ISetDeleteItemModalVisibility;
  setEditCategoryModalVisibility: (
    isVisible: boolean
  ) => ISetEditCategoryModalVisibility;
  setDeleteCategoryModalVisibility: (
    isVisible: boolean
  ) => ISetDeleteCategoryModalVisibility;

  addTravelItem: (category: ISelectedCategory, item: string) => IAddTravelItem;
  editTravelItem: (
    category: ISelectedCategory,
    item: ISelectedItem,
    newItem: {
      item: string;
      isCompleted: boolean;
    }
  ) => IEditTravelItem;
}
