export const togglePaymentMethod = paymentType => {
  return {
    type: 'TOGGLE_PAYMENT_METHOD',
    paymentType
  };
};

export const toggleGiftPayment = () => {
  return {
    type: 'TOGGLE_GIFT_PAYMENT'
  };
};

export const togglePeriod = period => {
  return {
    type: 'TOGGLE_PERIOD',
    period
  };
};

export const toggleProlongation = () => {
  return {
    type: 'TOGGLE_PROLONGATION'
  };
};

export const toggleDiscount = () => {
  return {
    type: 'TOGGLE_DISCOUNT'
  };
};
