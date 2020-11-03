import React, { ReactElement } from 'react';

import SuitCase from '../components/organism/Suitcase/Suitcase';
import TripInfo from '../components/organism/TripInfo/TripInfo';

import styled from 'styled-components';

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

const Index = (): ReactElement => {
  return (
    <IndexContainer>
      <TripInfo />
      <SuitCase />
    </IndexContainer>
  );
};

export default Index;
