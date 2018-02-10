import React from 'react';
import PaymentMethod from './PaymentMethod';
import styled from 'styled-components';
import Gift from './Gift';

const PaymentMethodListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PaymentMethodList = ({
  selectedMethod,
  giftChecked,
  onPaymentMethodClick,
  onGiftInputChange
}) => {
  const paymentTypes = [
    'visa',
    'yandex',
    'paypal',
    'webmoney',
    'sms',
    'qiwi',
    'gift'
  ];
  const paymentMethodList = paymentTypes.map((paymentType, index) => (
    <PaymentMethod
      selected={selectedMethod === paymentType}
      active={selectedMethod === 'none' ? true : selectedMethod === paymentType}
      paymentType={paymentType}
      enabled={paymentType === 'gift' ? !giftChecked : true}
      onClick={() => onPaymentMethodClick(paymentType)}
      key={index}
    />
  ));
  return (
    <div>
      <h3>Выберите способ оплаты</h3>
      <PaymentMethodListWrapper>{paymentMethodList}</PaymentMethodListWrapper>
      <Gift
        type="checkbox"
        checked={giftChecked}
        enabled={selectedMethod !== 'gift'}
        onChange={() => onGiftInputChange()}
      />
    </div>
  );
};

export default PaymentMethodList;
