import React from 'react';
import styled from 'styled-components';
import Period from './Period';
import Prolongation from './Prolongation';

const PeriodListWrapper = styled.div``;

const PeriodsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ProlongationDescription = styled.p`
  width: 60%;
  font-size: 0.8rem;
  color: gray;
`;

const PeriodList = ({
  selectedPeriod,
  prolongationChecked,
  periodsEnabled,
  prolongationEnabled,
  onPeriodClick,
  onProlongationInputChange
}) => {
  const periods = [
    { months: 24, pricePerMonth: 120, label: '2 года' },
    { months: 12, pricePerMonth: 125, label: '1 год' },
    { months: 6, pricePerMonth: 130, label: '6 месяцев' }
  ];
  const periodList = periods.map((period, index) => (
    <Period
      selected={selectedPeriod.months === period.months}
      onClick={() => onPeriodClick(period)}
      period={period}
      key={index}
    />
  ));
  if (periodsEnabled) {
    return (
      <PeriodListWrapper>
        <h3>На какой срок</h3>
        <PeriodsWrapper>{periodList}</PeriodsWrapper>
        <ProlongationDescription>
          В конце срока подписка продлится автоматически. Вы можете выключить
          автопродление в любой момент в настройках или отменить его.{' '}
        </ProlongationDescription>
        <Prolongation
          enabled={prolongationEnabled}
          onChange={() => onProlongationInputChange()}
          checked={prolongationChecked}
          type="checkbox"
        />
      </PeriodListWrapper>
    );
  }
  return null;
};

export default PeriodList;
