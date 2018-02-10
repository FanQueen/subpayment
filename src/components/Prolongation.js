import React from 'react';
import styled, { css } from 'styled-components';
import CheckboxStyles from '../styles/CheckboxStyles';

const ProlongationWrapper = styled.div`
  ${props => {
    if (!props.enabled) {
      return css`
        visibility: hidden;
      `;
    }
  }};
  ${CheckboxStyles};
`;

const Prolongation = ({ enabled, checked, onChange }) => {
  return (
    <ProlongationWrapper enabled={enabled}>
      <label>
        <input onChange={onChange} checked={checked} type="checkbox" />
        Продлевать подписку автоматически
      </label>
    </ProlongationWrapper>
  );
};

export default Prolongation;
