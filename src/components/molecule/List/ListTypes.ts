import {
  IAddTravelItem,
  IEditTravelItem,
  IListItemDetail,
} from '../../../redux/travel/travelTypes';

import {
  IDeleteModalVisibility,
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
  isDeleteModalVisible: boolean;
  setDeleteModalVisibility: (isVisible: boolean) => IDeleteModalVisibility;

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
