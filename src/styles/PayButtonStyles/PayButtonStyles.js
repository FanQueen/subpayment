import { css } from 'styled-components';

const PayButtonStyles = css`
  height: 45px;
  width: 150px;
  margin: 10px 0;
  background: #ffdf87;
  border: 0;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    border: 1px solid;
    background: rgba(0, 0, 0, 0);
    opacity: 0.7;
  }
`;

export default PayButtonStyles;
