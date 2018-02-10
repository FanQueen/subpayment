import { css } from 'styled-components';

const PaymentAndPeriodStyles = css`
  background: white;
  border: 2px dotted #bfbfbf;
  margin: 10px 10px 10px 0;
  &:hover {
    background: #ffdf87;
    cursor: pointer;
  }
  ${props => {
    if (props.selected) {
      return css`
        background: #ffdf87;
        border: 2px solid rgba(0, 0, 0, 0);
      `;
    }
  }};
`;

export default PaymentAndPeriodStyles;
