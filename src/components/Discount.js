import React from 'react';
import styled from 'styled-components';
import CheckboxStyles from '../styles/CheckboxStyles';

const DiscountWrapper = styled.div`
  ${CheckboxStyles};
`;

const Discount = ({ checked, onChange }) => {
  return (
    <DiscountWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        Добавить скидку 5% на весь ассортимент товаров
      </label>
    </DiscountWrapper>
  );
};

export default Discount;
