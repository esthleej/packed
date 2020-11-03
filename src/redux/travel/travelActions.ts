import {
  ISelectedCategory,
  ISelectedItem,
} from '../visibility/visibilityTypes';

import {
  Constants,
  IAddTravelCategory,
  IAddTravelItem,
  IDeleteTravelItem,
  IEditTravelInfo,
  IEditTravelItem,
  ITravelInfo,
} from './travelTypes';

export const addTravelItem = (
  category: ISelectedCategory,
  item: string
): IAddTravelItem => {
  return {
    type: Constants.ADD_TRAVEL_ITEM,
    payload: { category, item },
  };
};

export const editTravelItem = (
  category: ISelectedCategory,
  item: ISelectedItem,
  newItem: {
    item: string;
    isCompleted: boolean;
  }
): IEditTravelItem => {
  return {
    type: Constants.EDIT_TRAVEL_ITEM,
    payload: { category, item, newItem },
  };
};

export const deleteTravelItem = (
  category: ISelectedCategory,
  item: ISelectedItem
): IDeleteTravelItem => {
  return {
    type: Constants.DELETE_TRAVEL_ITEM,
    payload: { category, item },
  };
};

export const addTravelCategory = (category: string): IAddTravelCategory => {
  return {
    type: Constants.ADD_TRAVEL_CATEGORY,
    payload: category,
  };
};

export const editTravelInfo = (travelInfo: ITravelInfo): IEditTravelInfo => {
  return {
    type: Constants.EDIT_TRAVEL_INFO,
    payload: travelInfo,
  };
};

// export const reorderTravelItem = (category, item) => {
//   return {
//     type: REORDER_TRAVEL_ITEM,
//     payload: { category, item },
//   };
// };
