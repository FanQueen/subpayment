import React from 'react';
import styled, { css } from 'styled-components';
import PaymentAndPeriodStyles from '../styles/PaymentAndPeriodStyles';
import logos from '../logos';

const PaymentMethodWrapper = styled.div`
  ${PaymentAndPeriodStyles};
  height: 85px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => {
    if (!props.enabled) {
      return css`
        pointer-events: none;
        opacity: 0.5;
        &:hover {
          cursor: default;
        }
      `;
    }
  }};
`;

const RestrictSpan = styled.span`
  color: gray;
`;

const Image = styled.img`
  width: 120px;
`;

const PaymentMethod = ({ paymentType, selected, active, onClick, enabled }) => {
  let filling;
  const logo = active ? logos[paymentType] : logos[paymentType + 'bw'];
  if (logo) {
    filling = <Image src={logo} />;
  } else {
    filling =
      paymentType === 'sms' ? (
        <p>
          SMS<br />
          <RestrictSpan>Только для России</RestrictSpan>
        </p>
      ) : (
        <p>
          Подарочный<br />код
        </p>
      );
  }
  return (
    <PaymentMethodWrapper
      selected={selected}
      enabled={enabled}
      onClick={onClick}
    >
      {filling}
    </PaymentMethodWrapper>
  );
};

export default PaymentMethod;
