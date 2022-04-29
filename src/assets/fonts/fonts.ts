import { css } from 'styled-components';
import rubikRegular from './Rubik-Regular.ttf';
import rubikMedium from './Rubik-Medium.ttf';
import workSansRegular from './WorkSans-Regular.ttf';
import workSansSemiBold from './WorkSans-SemiBold.ttf';

export const fonts = css`
  @font-face {
    font-family: Rubik;
    src: url(${rubikRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Rubik;
    src: url(${rubikMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Work Sans;
    src: url(${workSansRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Work Sans;
    src: url(${workSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;
