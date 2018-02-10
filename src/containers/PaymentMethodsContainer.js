import { connect } from 'react-redux';
import { togglePaymentMethod, toggleGiftPayment } from '../actions';
import PaymentMethodList from '../components/PaymentMethodList';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedMethod: state.selectedMethod,
    giftChecked: state.giftChecked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaymentMethodClick: paymentType => {
      dispatch(togglePaymentMethod(paymentType));
    },
    onGiftInputChange: () => {
      dispatch(toggleGiftPayment());
    }
  };
};

const PaymentMethodsContainer = connect(mapStateToProps, mapDispatchToProps)(
  PaymentMethodList
);

export default PaymentMethodsContainer;
