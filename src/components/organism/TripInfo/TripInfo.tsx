import React, {
  useState,
  Fragment,
  SetStateAction,
  Dispatch,
  ReactElement,
} from 'react';
import { connect } from 'react-redux';

import TripInfoForm from '../../molecule/TripInfoForm/TripInfoForm';

import { editTravelInfo } from '../../../redux/travel/travelActions';
import { ITravelInfo } from '../../../redux/travel/travelTypes';
import { IStoreState } from '../../../redux/rootReducer';

import styled from 'styled-components';
import { ITripInfo } from './TripInfoTypes';

const EditIcon = require('../../../images/icons/edit.svg') as string;

const mapStateToProps = ({ travel }: IStoreState) => ({
  travelInfo: travel.travelInfo,
});

const mapDispatchToProps = {
  editTravelInfo,
};

const TripInfoContainer = styled.div`
  margin: 1rem;
  overflow: auto;

  &:hover .edit-btn {
    visibility: visible;
  }

  .edit-btn {
    visibility: hidden;
    border: none;
    background: white;
    outline: none;
  }
  img {
    width: 2rem;
    :hover {
      opacity: 0.5;
    }
  }

  h3 {
    display: flex;
    font-size: 1.8rem;
    font-weight: 400;
  }

  .content-top {
    display: flex;
    justify-content: space-between;
  }
  .content {
    border: 1px solid white;
    padding: 1rem;
    padding: 0rem;
    margin-top: 0.5rem;
    margin: 0.5rem 24px 0rem 24px;
    .dates {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const TripInfo = ({ travelInfo, editTravelInfo }: ITripInfo): ReactElement => {
  const [isEditOpen, setEditOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const [travelInfoValue, setTravelInfoValue]: [
    ITravelInfo,
    Dispatch<SetStateAction<ITravelInfo>>
  ] = useState<ITravelInfo>(travelInfo);

  return (
    <TripInfoContainer>
      <div className='content'>
        <div className='content-top'>
          <h2>Trip Info</h2>
          <button
            type='button'
            className='edit-btn'
            onClick={() => setEditOpen(true)}
          >
            <img alt='edit' src={EditIcon} />
          </button>
        </div>
        {!isEditOpen ? (
          <Fragment>
            <h3>
              <strong>Destination:&nbsp;</strong>
              {travelInfoValue.destination}
            </h3>
            <h3>
              <strong>Duration:&nbsp;</strong>
              {travelInfoValue.duration}
            </h3>
            <hr />
            <div className='dates'>
              <div>
                <h3>
                  <strong>Airline:&nbsp;</strong>
                  {travelInfoValue.from.airline}
                </h3>
                <h3>
                  <strong>Depart:&nbsp;</strong>
                  {travelInfoValue.from.departure}
                </h3>
                <h3>
                  <strong>Arrive:&nbsp;</strong>
                  {travelInfoValue.from.arrival}
                </h3>
                <h3>
                  <strong>Terminal:&nbsp;</strong>
                  {travelInfoValue.from.terminal}
                </h3>
              </div>
              <div>
                <h3>
                  <strong>Airline:&nbsp;</strong>
                  {travelInfoValue.to.airline}
                </h3>
                <h3>
                  <strong>Depart:&nbsp;</strong>
                  {travelInfoValue.to.departure}
                </h3>
                <h3>
                  <strong>Arrive:&nbsp;</strong>
                  {travelInfoValue.to.arrival}
                </h3>
                <h3>
                  <strong>Terminal:&nbsp;</strong>
                  {travelInfoValue.to.terminal}
                </h3>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <TripInfoForm
              editTravelInfo={editTravelInfo}
              travelInfoValue={travelInfoValue}
              setTravelInfoValue={setTravelInfoValue}
              setEditOpen={setEditOpen}
              travelInfo={travelInfo}
            />
          </Fragment>
        )}
      </div>
    </TripInfoContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);
