const todoApp = (
  state = {
    selectedMethod: 'none',
    giftChecked: false,
    selectedPeriod: {},
    prolongationChecked: false,
    discountChecked: false
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_PAYMENT_METHOD': {
      const { paymentType } = action;
      return {
        ...state,
        selectedMethod: paymentType,
        giftChecked: paymentType !== 'gift' ? state.giftChecked : false,
        prolongationChecked:
          (paymentType === 'visa' ||
            paymentType === 'yandex' ||
            paymentType === 'paypal' ||
            paymentType === 'sms') &&
          !state.giftChecked
            ? state.prolongationChecked
            : false
      };
    }
    case 'TOGGLE_GIFT_PAYMENT': {
      return {
        ...state,
        giftChecked: !state.giftChecked,
        prolongationChecked: !state.giftChecked
          ? false
          : state.prolongationChecked
      };
    }
    case 'TOGGLE_PERIOD': {
      return {
        ...state,
        selectedPeriod: action.period
      };
    }
    case 'TOGGLE_PROLONGATION': {
      return {
        ...state,
        prolongationChecked: !state.prolongationChecked
      };
    }
    case 'TOGGLE_DISCOUNT': {
      return {
        ...state,
        discountChecked: !state.discountChecked
      };
    }
    default: {
      return state;
    }
  }
};

export default todoApp;
