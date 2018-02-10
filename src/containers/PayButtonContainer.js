import { connect } from 'react-redux';
import PayButton from '../components/PayButton';

const mapStateToProps = state => {
  return {
    buttonDisabled: !state.selectedPeriod.months,
    visible: state.selectedMethod !== 'none'
  };
};

const PayButtonContainer = connect(mapStateToProps)(PayButton);

export default PayButtonContainer;
