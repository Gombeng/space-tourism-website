import { createGlobalStyle } from 'styled-components';
import { device } from './utils/Device';
import { color, fontfamily } from './utils/GlobalVar';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    ${'' /* border: 1px solid black; */}
        transition: all .6s ease-in-out;
    }

    body {
        color: ${color.textOne};
        min-height: fit-content;
        
        @media ${device.tabletmax} { 
            text-align: center;
        }
    }
    
    a {
        text-decoration: none;   
    }
    
	hr {
		opacity: 0.4;
	}
    
    h1,
    h2,
    h3,
    h4 {
        font-family: ${fontfamily.bellefair};
        font-weight: 400;
    }

    h5 {
        color: ${color.textSec};
        font-family: ${fontfamily.barlowCond};
    }

    h1 {
        font-size: 80px;
        margin: 16px 0;

        @media ${device.tablet} { 
            font-size: 150px;
        }
    }

    h2 {
        font-size: 56px;

        @media ${device.tablet} {
            font-size: 80px;
        }

        @media ${device.laptop} { 
            font-size: 100px;
        }
    }

    h3 {
        font-size: 56px;
    }

    h4 {
        font-size: 32px;
    }

    h5 {
        font-size: 16px;
        letter-spacing: 4.75px;

        @media ${device.tablet} { 
            font-size: 20px;
        }

        @media ${device.laptop} { 
            font-size: 28px;
        }
    }

    p {
        font-family: ${fontfamily.barlow};
        color: ${color.textSec};
        font-size: 15px;
        line-height: 25px;
        letter-spacing: .1px;
        
        @media ${device.tablet} { 
            font-size: 16px;
            letter-spacing: .09px;
        }

        @media ${device.laptop} { 
            font-size: 18px;
            letter-spacing: .02px;
        }
    }

    ${'' /* pake tag h5 */}
    .subheading-1 {
        color: ${color.textOne};
        font-family: ${fontfamily.bellefair};
        font-size: 28px;
    }

    ${'' /* pake tag h6 */}
    .subheading-2 {
        color: ${color.textSec};
        font-family: ${fontfamily.barlowCond};
        font-size: 14px;
        letter-spacing: 2.35px;
    }

    ${'' /* nav text */}
    a.link{
        font-size: 16px;
        letter-spacing: 2.7px;
        color: ${color.textSec};
        font-family: ${fontfamily.barlowCond};

        @media ${device.tablet} { 
            font-size: 14px;
        }

        &:hover,
        &.active{
            color: ${color.textOne};
        }
    }

    .font-bellefair {
        font-family: ${fontfamily.bellefair};
    }

    .mb-1{
        margin-bottom: 1rem;
    }

    .mb-2{
        margin-bottom: 2rem;
    }

    .my-2{
        margin: 2rem 0;
    }

`;

export default GlobalStyle;
