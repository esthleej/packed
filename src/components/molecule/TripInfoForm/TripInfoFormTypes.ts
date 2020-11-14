import {
  IEditTravelInfo,
  ITravelInfo,
} from '../../../redux/travel/travelTypes';

export interface ITripInfoForm {
  travelInfo: ITravelInfo;
  editTravelInfo: (travelInfo: ITravelInfo) => IEditTravelInfo;
  travelInfoValue: ITravelInfo;
  setTravelInfoValue: (travelInfo: ITravelInfo) => void;
  setEditOpen: (isOpen: boolean) => void;
}
