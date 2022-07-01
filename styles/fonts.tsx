import { css } from 'styled-components';

import GothamBookWoff2 from './fonts/gotham/GothamBook.woff2';
import GothamBookWoff from './fonts/gotham/GothamBook.woff';

import GothamMediumWoff2 from './fonts/gotham/GothamMedium.woff2';
import GothamMediumWoff from './fonts/gotham/GothamMedium.woff';

export const fontFaces = css`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookWoff2}) format('woff2'),
        url(${GothamBookWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Gotham';
      src: url(${GothamMediumWoff2}) format('woff2'),
          url(${GothamMediumWoff}) format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
`;
