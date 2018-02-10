import React from 'react';
import styled, { css } from 'styled-components';
import CheckboxStyles from '../styles/CheckboxStyles';

const GiftWrapper = styled.div`
  ${props => {
    if (!props.enabled) {
      return css`
        visibility: hidden;
      `;
    }
  }};
  ${CheckboxStyles};
`;

const Gift = ({ enabled, checked, onChange }) => {
  return (
    <GiftWrapper enabled={enabled}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        Покупаю подписку в подарок
      </label>
    </GiftWrapper>
  );
};

export default Gift;
