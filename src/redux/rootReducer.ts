import { combineReducers } from 'redux';
import visibilityReducer from './visibility/visibilityReducer';
import travelReducer from './travel/travelReducer';

import { IVisibilityState } from './visibility/visibilityTypes';
import { ITravelState } from './travel/travelTypes';

export interface IStoreState {
  visibility: IVisibilityState;
  travel: ITravelState;
}

const rootReducer = combineReducers<IStoreState>({
  visibility: visibilityReducer,
  travel: travelReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
