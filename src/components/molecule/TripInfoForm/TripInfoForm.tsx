import React, { ReactElement, ChangeEvent, FormEvent } from 'react';
import Button from '../../atom/Button/Button';

import styled from 'styled-components';

import {
  ITravelInfo,
  ITravelInfoFlight,
} from '../../../redux/travel/travelTypes';
import { ITripInfoForm } from './TripInfoFormTypes';

const TripInfoFormContainer = styled.form`
  margin: 1rem;
  overflow: auto;

  input {
    width: 100%;
    border: none !important;
    background: #e0f1ff;
    border-radius: none !important;
    padding: 0;
    cursor: text;

    :focus {
      outline: none;
    }
  }

  .flightInfo-btns {
    margin-top: 1rem;
  }
`;

const TripInfoForm = ({
  travelInfo,
  editTravelInfo,
  travelInfoValue,
  setTravelInfoValue,
  setEditOpen,
}: ITripInfoForm): ReactElement => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof ITravelInfo,
    subField?: string
  ): void => {
    if (subField) {
      setTravelInfoValue({
        ...travelInfoValue,
        [field]: {
          ...(travelInfoValue[field] as ITravelInfoFlight),
          [subField]: e.target.value,
        },
      });
    }
    if (!subField) {
      setTravelInfoValue({
        ...(travelInfoValue as ITravelInfo),
        [field]: e.target.value,
      });
    }
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault;
    editTravelInfo(travelInfoValue);
    setEditOpen(false);
  };

  const handleCancel = (): void => {
    setTravelInfoValue(travelInfo);
    setEditOpen(false);
  };

  return (
    <TripInfoFormContainer onSubmit={handleEdit}>
      <h3>
        <strong>Destination:&nbsp;</strong>
        <input
          type='text'
          id='destination'
          name='destination'
          onChange={(e) => handleChange(e, 'destination')}
          value={travelInfoValue.destination}
        />
      </h3>
      <h3>
        <strong>Duration:&nbsp;</strong>
        <input
          type='text'
          id='duration'
          name='duration'
          onChange={(e) => handleChange(e, 'duration')}
          value={travelInfoValue.duration}
        />
      </h3>
      <hr />

      <div className='dates'>
        <div>
          <h3>
            <strong>Airline:&nbsp;</strong>
            <input
              type='text'
              id='from-airline'
              name='from-airline'
              onChange={(e) => handleChange(e, 'from', 'airline')}
              value={travelInfoValue.from.airline}
            />
          </h3>
          <h3>
            <strong>Depart:&nbsp;</strong>
            <input
              type='text'
              id='from-departure'
              name='from-departure'
              onChange={(e) => handleChange(e, 'from', 'departure')}
              value={travelInfoValue.from.departure}
            />
          </h3>
          <h3>
            <strong>Arrive:&nbsp;</strong>
            <input
              type='text'
              id='from-arrival'
              name='from-arrival'
              onChange={(e) => handleChange(e, 'from', 'arrival')}
              value={travelInfoValue.from.arrival}
            />
          </h3>
          <h3>
            <strong>Terminal:&nbsp;</strong>
            <input
              type='text'
              id='from-terminal'
              name='from-terminal'
              onChange={(e) => handleChange(e, 'from', 'terminal')}
              value={travelInfoValue.from.terminal}
            />
          </h3>
        </div>

        <div>
          <h3>
            <strong>Airline:&nbsp;</strong>
            <input
              type='text'
              id='to-airline'
              name='to-airline'
              onChange={(e) => handleChange(e, 'to', 'airline')}
              value={travelInfoValue.to.airline}
            />
          </h3>
          <h3>
            <strong>Depart:&nbsp;</strong>
            <input
              type='text'
              id='to-departure'
              name='to-departure'
              onChange={(e) => handleChange(e, 'to', 'departure')}
              value={travelInfoValue.to.departure}
            />
          </h3>
          <h3>
            <strong>Arrive:&nbsp;</strong>
            <input
              type='text'
              id='to-arrival'
              name='to-arrival'
              onChange={(e) => handleChange(e, 'to', 'arrival')}
              value={travelInfoValue.to.arrival}
            />
          </h3>
          <h3>
            <strong>Terminal:&nbsp;</strong>
            <input
              type='text'
              id='to-terminal'
              name='to-terminal'
              onChange={(e) => handleChange(e, 'to', 'terminal')}
              value={travelInfoValue.to.terminal}
            />
          </h3>
        </div>
      </div>

      <div className='flightInfo-btns'>
        <Button primary onClick={handleEdit}>
          Edit Trip
        </Button>
        <Button
          style={{
            marginLeft: '2rem',
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </TripInfoFormContainer>
  );
};

export default TripInfoForm;
