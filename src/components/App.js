import React from 'react';
import PaymentMethodsContainer from '../containers/PaymentMethodsContainer';
import PeriodsContainer from '../containers/PeriodsContainer';
import TotalContainer from '../containers/TotalContainer';
import PayButtonContainer from '../containers/PayButtonContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
`;

const App = () => {
  return (
    <AppWrapper>
      <PaymentMethodsContainer />
      <PeriodsContainer />
      <TotalContainer />
      <PayButtonContainer />
    </AppWrapper>
  );
};

export default App;
