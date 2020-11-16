import { Actions, Constants, IVisibilityState } from './visibilityTypes';

const initState = {
  isEditCategoryModalVisible: false,
  isDeleteCategoryModalVisible: false,
  isDeleteItemModalVisible: false,

  selectedCategory: {
    name: '',
    index: 0,
  },
  selectedItem: {
    id: '',
    name: '',
    index: 0,
  },
};

const visibilityReducer = (
  state: IVisibilityState = initState,
  action: Actions
) => {
  switch (action.type) {
    case Constants.SET_EDIT_CATEGORY_MODAL_VISIBILITY:
      return {
        ...state,
        isEditCategoryModalVisible: action.payload,
      };
    case Constants.SET_DELETE_CATEGORY_MODAL_VISIBILITY:
      return {
        ...state,
        isDeleteCategoryModalVisible: action.payload,
      };
    case Constants.SET_DELETE_ITEM_MODAL_VISIBILITY:
      return {
        ...state,
        isDeleteItemModalVisible: action.payload,
      };
    case Constants.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case Constants.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

export default visibilityReducer;
