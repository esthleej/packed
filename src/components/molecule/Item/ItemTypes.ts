import { IEditTravelItem } from '../../../redux/travel/travelTypes';
import {
  ISetDeleteItemModalVisibility,
  ISelectedCategory,
  ISelectedItem,
  ISetSelectedCategory,
  ISetSelectedItem,
} from '../../../redux/visibility/visibilityTypes';

export interface ITextStyled {
  strikeThrough: boolean;
}

export interface IItemProps {
  category: ISelectedCategory;
  index: number;
  itemId: string;
  item: string;
  checked: boolean;

  handleInputOpen: (isAddItemOpen: boolean, id: string) => void;
  handleInputClose: () => void;

  selectedCategory: ISelectedCategory;
  setSelectedCategory: (category: ISelectedCategory) => ISetSelectedCategory;
  selectedItem: ISelectedItem;
  setSelectedItem: (item: ISelectedItem) => ISetSelectedItem;
  isDeleteItemModalVisible: boolean;
  setDeleteItemModalVisibility: (
    isVisible: boolean
  ) => ISetDeleteItemModalVisibility;

  editTravelItem: (
    category: ISelectedCategory,
    item: ISelectedItem,
    newItem: {
      item: string;
      isCompleted: boolean;
    }
  ) => IEditTravelItem;
}
