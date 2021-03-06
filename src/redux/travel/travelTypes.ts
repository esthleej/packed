import {
  ISelectedItem,
  ISelectedCategory,
} from '../visibility/visibilityTypes';

export enum Constants {
  ADD_TRAVEL_ITEM = 'ADD_TRAVEL_ITEM',
  EDIT_TRAVEL_ITEM = 'EDIT_TRAVEL_ITEM',
  DELETE_TRAVEL_ITEM = 'DELETE_TRAVEL_ITEM',
  ADD_TRAVEL_CATEGORY = 'ADD_TRAVEL_CATEGORY',
  EDIT_TRAVEL_CATEGORY = 'EDIT_TRAVEL_CATEGORY',
  DELETE_TRAVEL_CATEGORY = 'DELETE_TRAVEL_CATEGORY',
  EDIT_TRAVEL_INFO = 'EDIT_TRAVEL_INFO',
}

export interface IAddTravelItem {
  type: Constants.ADD_TRAVEL_ITEM;
  payload: { category: ISelectedCategory; item: string };
}

export interface IEditTravelItem {
  type: Constants.EDIT_TRAVEL_ITEM;
  payload: {
    category: ISelectedCategory;
    item: ISelectedItem;
    newItem: {
      item: string;
      isCompleted: boolean;
    };
  };
}

export interface IDeleteTravelItem {
  type: Constants.DELETE_TRAVEL_ITEM;
  payload: { category: ISelectedCategory; item: ISelectedItem };
}

export interface IAddTravelCategory {
  type: Constants.ADD_TRAVEL_CATEGORY;
  payload: string;
}

export interface IEditTravelCategory {
  type: Constants.EDIT_TRAVEL_CATEGORY;
  payload: {
    category: ISelectedCategory;
    newCategory: string;
  };
}

export interface IDeleteTravelCategory {
  type: Constants.DELETE_TRAVEL_CATEGORY;
  payload: ISelectedCategory;
}

export interface IEditTravelInfo {
  type: Constants.EDIT_TRAVEL_INFO;
  payload: ITravelInfo;
}

export type Actions =
  | IAddTravelItem
  | IEditTravelItem
  | IDeleteTravelItem
  | IAddTravelCategory
  | IEditTravelCategory
  | IDeleteTravelCategory
  | IEditTravelInfo;

export interface ITravelInfo {
  destination: string;
  duration: string;
  from: ITravelInfoFlight;
  to: ITravelInfoFlight;
}

export interface ITravelInfoFlight {
  airline: string;
  departure: string;
  arrival: string;
  terminal: string;
}

export interface IListItem {
  categoryId: string;
  category: string;
  list: IListItemDetail[];
}

export interface IListItemDetail {
  itemId: string;
  item: string;
  isCompleted: boolean;
}

export interface ITravelState {
  readonly travelInfo: ITravelInfo;
  readonly lists: IListItem[];
}
