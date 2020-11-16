import React, { ReactElement } from 'react';
import styled from 'styled-components';

const SuitcaseIcon = require('../../../images/icons/suitcase.svg') as string;

const NavbarContainer = styled.div`
  background-color: #b3cdeb;
  width: 100%;
  padding: 1rem 1rem;

  @media (min-width: 800px) {
    padding: 1rem 6rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  img {
    width: 35px;
    height: 35px;
    margin-right: 1rem;
  }
`;

const Navbar = (): ReactElement => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img alt='suitcase' src={SuitcaseIcon} />
        <h2>packed</h2>
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
