import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        outline : none;
    }
    
    *, :after , :before {
        box-sizing :  inherit;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 90px;
    }
    
    body {
      font-family : 'Muli', san-serif;
      box-sizing : border-box;
      padding-top : 60px;
    }

    a  {
        text-decoration : none;
        color : ${(props) => props.theme.colors.dark};
    }

    a:hover {
        color : ${(props) => props.theme.colors.dark};
        text-decoration : none;
    }

    input[type="text"], button , input:focus, textarea,button:focus {
        outline: none;
        box-shadow:none !important;
        border:1px solid #ccc !important;
    }

    .btn-main { 
        background-color : ${(props) => props.theme.colors.main};
        transition : all 0.4s ease-in-out;
    }

    .btn-main:hover {
        background-color : ${(props) => props.theme.colors.main};
        transform : translateY(-4px);
    }

    .desc {
        margin: 40px 0px;
        color: rgb(105, 105, 105);
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
    }
    
    .p-right {
        @media (max-width: 768px) {
          margin-top : 0 !important;
        }
    }

    .w-100 {
        width : 100%;
    }

    .max-w-700 {
        max-width : 700px;
    }

    .title {
        width : 100%;
        font-style : normal;
        font-weight: 700;
        font-size : 33px;
        line-height : 129.69%;
        letter-spacing: 0.03em;
        transform : translateY(30px);
        opacity :0;
        animation : 1s ease 0.2s 1 normal forwards running animateHeaderTitle;
        
        @keyframes animateHeaderTitle {
            0%{
                transform: translateY(30px);
                opacity: 0;
            }

            100%{
                transform: translateY(0px);
                opacity: 1;
            }
        }
    }

   
    .title {
        @media only screen and (min-width:960px) {
            font-size: 40px;
            transform : scale(1);
        }
    }

    .skill {
        color : #000;
        font-weight : 700;
    }

    .small-m0 {
        @media (max-width: 768px) {
          margin-top : 0 !important;
        }
    }

    .max-md-w60 {
        @media ${(props) => props.theme.mediaQueries.large}{
            width : 60%;
        }
    }

    .subtitle {
        font-style : normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 129.69%;
        text-align: left;
        max-width: 90%;
        letter-spacing : normal;
        opacity: 0;
        animation: 1s ease 0.2s 1 normal forwards running animateSubtitle;

        @keyframes animateSubtitle {
            0%{
              transform : translateY(30px);
              opacity: 0;
            }

            100%{
                transform : translateY(0);
                opacity: 1;
            }
        }

        @media ${(props) => props.theme.mediaQueries.large}{
            max-width : 200px;
            text-align: left;
        }
    }

    .link {
        margin: 60px 0px !important;
        width: 100%;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 163.19%;
        display: inline;
        color: black;
        letter-spacing: 0.03em;
        text-align: left;
        text-transform: uppercase;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.2s ease 0s;
    }

    .link:hover {
        text-decoration : none;
        border-bottom : 2px solid black;
    }
    .link > span {
        font-size: 20px;
    }

    .nav-pad {
        padding-top: 60px;
    }
`;
