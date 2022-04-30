import { createGlobalStyle } from 'styled-components';
import { fonts } from '../assets/fonts/fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: Work Sans, Rubik;
       color: #1E2A32;
   }
   #root{
       margin:0 auto;
   }
`;
export default GlobalStyle;
