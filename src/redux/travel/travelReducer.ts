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
  lists: [
    {
      category: 'clothes',
      list: [
        { item: '5 shirts', isCompleted: false, id: uuidv4() },
        { item: '2 pants', isCompleted: false, id: uuidv4() },
        { item: '1 cap', isCompleted: false, id: uuidv4() },
      ],
    },
    {
      category: 'electronics',
      list: [{ item: 'hair dryer', isCompleted: false, id: uuidv4() }],
    },
  ],
};

const travelReducer = (state: ITravelState = initState, actions: Actions) => {
  let lists = [...state.lists];
  let newList;
  switch (actions.type) {
    case Constants.ADD_TRAVEL_ITEM:
      const newItem: IListItemDetail = {
        id: uuidv4(),
        item: actions.payload.item,
        isCompleted: false,
      };
      lists[actions.payload.category.index].list.push(newItem);

      return {
        ...state,
        lists,
      };

    case Constants.EDIT_TRAVEL_ITEM:
      newList = state.lists[actions.payload.category.index].list.map((item) => {
        if (actions.payload.item.name === item.item) {
          return {
            ...actions.payload.newItem,
            id: item.id,
          };
        } else {
          return item;
        }
      });

      lists[actions.payload.category.index] = {
        category: actions.payload.category.name,
        list: newList,
      };

      return {
        ...state,
        lists,
      };

    case Constants.DELETE_TRAVEL_ITEM:
      newList = state.lists[actions.payload.category.index].list.filter(
        ({ id }) => {
          return actions.payload.item.id !== id;
        }
      );

      lists[actions.payload.category.index] = {
        category: actions.payload.category.name,
        list: newList,
      };

      return {
        ...state,
        lists,
      };

    case Constants.ADD_TRAVEL_CATEGORY:
      const newCategory: IListItem = {
        category: actions.payload,
        list: [],
      };
      lists.push(newCategory);
      return {
        ...state,
        lists,
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
