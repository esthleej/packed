import {
  IAddTravelCategory,
  IDeleteTravelCategory,
  IDeleteTravelItem,
  IEditTravelCategory,
  IListItem,
} from '../../../redux/travel/travelTypes';

import {
  ISetEditCategoryModalVisibility,
  ISetDeleteItemModalVisibility,
  ISetDeleteCategoryModalVisibility,
  ISelectedCategory,
  ISelectedItem,
  ISetSelectedCategory,
} from '../../../redux/visibility/visibilityTypes';

export interface ISuitCaseProps {
  lists: IListItem[];
  deleteTravelItem: (
    category: ISelectedCategory,
    item: ISelectedItem
  ) => IDeleteTravelItem;
  addTravelCategory: (category: string) => IAddTravelCategory;
  editTravelCategory: (
    category: ISelectedCategory,
    value: string
  ) => IEditTravelCategory;

  deleteTravelCategory: (category: ISelectedCategory) => IDeleteTravelCategory;
  isEditCategoryModalVisible: boolean;
  isDeleteCategoryModalVisible: boolean;
  isDeleteItemModalVisible: boolean;
  setEditCategoryModalVisibility: (
    isVisible: boolean
  ) => ISetEditCategoryModalVisibility;
  setDeleteCategoryModalVisibility: (
    isVisible: boolean
  ) => ISetDeleteCategoryModalVisibility;
  setDeleteItemModalVisibility: (
    isVisible: boolean
  ) => ISetDeleteItemModalVisibility;

  selectedItem: ISelectedItem;
  selectedCategory: ISelectedCategory;
  setSelectedCategory: (category: ISelectedCategory) => ISetSelectedCategory;
}
