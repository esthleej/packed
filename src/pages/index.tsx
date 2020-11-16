import React, { ReactElement } from 'react';
import Head from 'next/head';

import SuitCase from '../components/organism/Suitcase/Suitcase';
import TripInfo from '../components/organism/TripInfo/TripInfo';

const SuitcaseIcon = require('../images/icons/suitcase.svg') as string;

import styled from 'styled-components';

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin-bottom: 3rem;
`;

const Index = (): ReactElement => {
  return (
    <IndexContainer>
      <Head>
        <title>packed</title>
        <link rel='logo' href={SuitcaseIcon} />
      </Head>
      <TripInfo />
      <SuitCase />
    </IndexContainer>
  );
};

export default Index;
