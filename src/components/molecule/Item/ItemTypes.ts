import { IEditTravelItem } from '../../../redux/travel/travelTypes';
import {
  IDeleteModalVisibility,
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
  id: string | number;
  item: string;
  checked: boolean;

  handleInputOpen: (isOpen: boolean, id?: string) => void;
  handleInputClose: () => void;

  selectedCategory: ISelectedCategory;
  setSelectedCategory: (category: ISelectedCategory) => ISetSelectedCategory;
  selectedItem: ISelectedItem;
  setSelectedItem: (item: ISelectedItem) => ISetSelectedItem;
  isDeleteModalVisible: boolean;
  setDeleteModalVisibility: (isVisible: boolean) => IDeleteModalVisibility;

  editTravelItem: (
    category: ISelectedCategory,
    item: ISelectedItem,
    newItem: {
      item: string;
      isCompleted: boolean;
    }
  ) => IEditTravelItem;
}
