import React from 'react';
import styled from 'styled-components';
import Discount from './Discount';

const TotalWrapper = styled.div``;

const Sum = styled.p`
  font-weight: bold;
`;

const SumSpan = styled.span`
  font-size: 2rem;
`;

const Summation = styled.span`
  color: gray;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 0.8rem;
  color: gray;
`;

const Total = ({
  selectedPeriod,
  prolongationChecked,
  discountChecked,
  onDiscountChange
}) => {
  const { months, pricePerMonth, label } = selectedPeriod;
  const discription = prolongationChecked ? (
    <Description>Далее 120 руб. в месяц</Description>
  ) : null;
  const sum = months * pricePerMonth;
  const totalSum = discountChecked ? (
    <SumSpan>
      <Summation>{sum} + 150 </Summation>
      = {sum + 150}
    </SumSpan>
  ) : (
    <SumSpan>{sum}</SumSpan>
  );
  if (months) {
    return (
      <TotalWrapper>
        <h3>Итого к оплате (за {label})</h3>
        <Sum>
          <SumSpan>{totalSum}</SumSpan> руб.
        </Sum>
        {discription}
        <Discount
          checked={discountChecked}
          onChange={() => onDiscountChange()}
          type="checkbox"
        />
      </TotalWrapper>
    );
  }
  return null;
};

export default Total;
