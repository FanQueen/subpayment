import { connect } from 'react-redux';
import { toggleDiscount } from '../actions';
import Total from '../components/Total';

const mapStateToProps = state => {
  return {
    selectedPeriod: state.selectedPeriod,
    prolongationChecked: state.prolongationChecked,
    discountChecked: state.discountChecked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDiscountChange: () => {
      dispatch(toggleDiscount());
    }
  };
};

const TotalContainer = connect(mapStateToProps, mapDispatchToProps)(Total);

export default TotalContainer;
