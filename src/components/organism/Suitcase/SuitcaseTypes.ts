import {
  IAddTravelCategory,
  IDeleteTravelItem,
  IListItem,
} from '../../../redux/travel/travelTypes';

import {
  IDeleteModalVisibility,
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
  isDeleteModalVisible: boolean;
  setDeleteModalVisibility: (isVisible: boolean) => IDeleteModalVisibility;
  selectedItem: ISelectedItem;
  selectedCategory: ISelectedCategory;
  setSelectedCategory: (category: ISelectedCategory) => ISetSelectedCategory;
}
