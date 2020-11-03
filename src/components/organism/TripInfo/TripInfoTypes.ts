import {
  IEditTravelInfo,
  ITravelInfo,
} from '../../../redux/travel/travelTypes';

export interface ITripInfo {
  travelInfo: ITravelInfo;
  editTravelInfo: (travelInfo: ITravelInfo) => IEditTravelInfo;
}
