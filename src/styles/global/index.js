import { injectGlobal } from 'styled-components';
import PT_Sans from './PT_Sans.ttf';

injectGlobal`
  @font-face {
    font-family: 'PT_Sans';
    src: url('${PT_Sans}') format('truetype');
  }

  body {
    font-family: 'PT_Sans';
    margin: 0;
    padding: 0;
  }

  /* &:hover label, &:hover input {
    cursor: pointer;
  } */

`;
