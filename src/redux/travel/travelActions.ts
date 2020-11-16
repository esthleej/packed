import {
  ISelectedCategory,
  ISelectedItem,
} from '../visibility/visibilityTypes';

import {
  Constants,
  IAddTravelCategory,
  IEditTravelCategory,
  IDeleteTravelCategory,
  IAddTravelItem,
  IDeleteTravelItem,
  IEditTravelItem,
  ITravelInfo,
  IEditTravelInfo,
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

export const editTravelCategory = (
  category: ISelectedCategory,
  newCategory: string
): IEditTravelCategory => {
  return {
    type: Constants.EDIT_TRAVEL_CATEGORY,
    payload: { category, newCategory },
  };
};

export const deleteTravelCategory = (
  category: ISelectedCategory
): IDeleteTravelCategory => {
  return {
    type: Constants.DELETE_TRAVEL_CATEGORY,
    payload: category,
  };
};

export const editTravelInfo = (travelInfo: ITravelInfo): IEditTravelInfo => {
  return {
    type: Constants.EDIT_TRAVEL_INFO,
    payload: travelInfo,
  };
};
