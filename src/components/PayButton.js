import React from 'react';
import styled from 'styled-components';
import PayButtonStyles from '../styles/PayButtonStyles';

const Button = styled.button`
  ${PayButtonStyles};
`;

const PayButton = ({ buttonDisabled, visible }) => {
  if (visible) {
    return <Button disabled={buttonDisabled}>Оплатить</Button>;
  }
  return null;
};

export default PayButton;
