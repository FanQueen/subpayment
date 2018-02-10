import React from 'react';
import styled from 'styled-components';
import PaymentAndPeriodStyles from '../styles/PaymentAndPeriodStyles';

const PeriodWrapper = styled.div`
  ${PaymentAndPeriodStyles};
  height: 110px;
  width: 220px;
`;

const Text = styled.p`
  margin: 8px 12px;
`;

const PricePerMonth = styled.span`
  font-size: 1.8rem;
`;

const Sum = styled.p`
  margin: 8px 12px;
  color: #702e02;
`;

const Period = ({ period, selected, onClick }) => {
  const { label, pricePerMonth, months } = period;
  return (
    <PeriodWrapper onClick={onClick} selected={selected}>
      <Text>{label}</Text>
      <Sum>{pricePerMonth * months} руб.</Sum>
      <Text>
        <PricePerMonth>{pricePerMonth}</PricePerMonth> руб./месяц
      </Text>
    </PeriodWrapper>
  );
};

export default Period;
