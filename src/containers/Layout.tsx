import React, { Fragment, ReactElement, ReactNode } from 'react';
import Navbar from '../components/molecule/Navbar/Navbar';
import styled from 'styled-components';

import { GlobalStyle, RebootStyle } from '../style';

const Wrapper = styled.div`
  display: flex;
  min-width: 440px;
  align-items: center;
  flex-direction: column;
`;

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): ReactElement => {
  return (
    <Fragment>
      <RebootStyle />
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </Fragment>
  );
};

export default Layout;
