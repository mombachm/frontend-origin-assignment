import { createGlobalStyle } from 'styled-components';
import { fonts } from '../assets/fonts/fonts';

export const MOBILE_MAX_SIZE = '560px';

const GlobalStyle = createGlobalStyle`
    ${fonts}
   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: Work Sans, Rubik;
       color: #1E2A32;
       user-select: none;
   }
   #root{
       margin: 0 auto;
       height: 100vh;
       background-color: #f4f8fa;
   }
`;
export default GlobalStyle;
