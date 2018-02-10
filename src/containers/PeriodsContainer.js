import { connect } from 'react-redux';
import { togglePeriod, toggleProlongation } from '../actions';
import PeriodList from '../components/PeriodList';

const mapStateToProps = state => {
  const { selectedMethod } = state;
  return {
    selectedPeriod: state.selectedPeriod,
    prolongationChecked: state.prolongationChecked,
    periodsEnabled: selectedMethod !== 'none',
    prolongationEnabled:
      (selectedMethod === 'visa' ||
        selectedMethod === 'yandex' ||
        selectedMethod === 'paypal' ||
        selectedMethod === 'sms') &&
      !state.giftChecked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPeriodClick: period => {
      dispatch(togglePeriod(period));
    },
    onProlongationInputChange: () => {
      dispatch(toggleProlongation());
    }
  };
};

const PeriodsContainer = connect(mapStateToProps, mapDispatchToProps)(
  PeriodList
);

export default PeriodsContainer;
