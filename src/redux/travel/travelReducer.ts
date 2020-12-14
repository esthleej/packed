const { v4: uuidv4 } = require('uuid');

import {
  Actions,
  Constants,
  IListItem,
  IListItemDetail,
  ITravelState,
} from './travelTypes';

const initState = {
  travelInfo: {
    destination: 'South Korea, Incheon',
    duration: 'January 29 - January 31, 2020',
    from: {
      airline: 'Korean Air',
      departure: '8:40 a.m.',
      arrival: '4:00 p.m.',
      terminal: 'H2',
    },
    to: {
      airline: 'Korean Air',
      departure: '5:42 a.m.',
      arrival: '12:30 p.m.',
      terminal: 'D4',
    },
  },

  lists: [],
};

const travelReducer = (state: ITravelState = initState, actions: Actions) => {
  Object.freeze(state);
  const lists = [...state.lists];
  let newList;
  switch (actions.type) {
    case Constants.ADD_TRAVEL_ITEM:
      const newItem: IListItemDetail = {
        itemId: uuidv4(),
        item: actions.payload.item,
        isCompleted: false,
      };
      lists[actions.payload.category.index].list.push(newItem);

      return {
        ...state,
        lists,
      };

    case Constants.EDIT_TRAVEL_ITEM:
      newList = lists[actions.payload.category.index].list.map((item) => {
        if (actions.payload.item.itemId === item.itemId) {
          return {
            ...actions.payload.newItem,
            itemId: item.itemId,
          };
        } else {
          return item;
        }
      });

      lists[actions.payload.category.index] = {
        ...lists[actions.payload.category.index],
        category: actions.payload.category.name,
        list: newList,
      };

      return {
        ...state,
        lists,
      };

    case Constants.DELETE_TRAVEL_ITEM:
      newList = lists[actions.payload.category.index].list.filter(
        ({ itemId }) => {
          return actions.payload.item.itemId !== itemId;
        }
      );

      lists[actions.payload.category.index] = {
        ...lists[actions.payload.category.index],
        category: actions.payload.category.name,
        list: newList,
      };

      return {
        ...state,
        lists,
      };

    case Constants.ADD_TRAVEL_CATEGORY:
      const newCategory: IListItem = {
        categoryId: uuidv4(),
        category: actions.payload,
        list: [],
      };
      lists.push(newCategory);
      return {
        ...state,
        lists,
      };

    case Constants.EDIT_TRAVEL_CATEGORY:
      lists[actions.payload.category.index] = {
        ...lists[actions.payload.category.index],
        category: actions.payload.newCategory,
      };

      return {
        ...state,
        lists,
      };

    case Constants.DELETE_TRAVEL_CATEGORY:
      newList = lists.filter(({ categoryId }) => {
        return actions.payload.categoryId !== categoryId;
      });
      return {
        ...state,
        lists: newList,
      };

    case Constants.EDIT_TRAVEL_INFO:
      return {
        ...state,
        travelInfo: actions.payload,
      };

    default:
      return state;
  }
};

export default travelReducer;
