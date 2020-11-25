import styled from '@emotion/styled';

export const HeaderTittle = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    color: white;
    margin: 0px;
    font-size: 5.2rem;
`;

export const HeaderTittleBold = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    color: white;
    margin: 0px;
    font-size: 5.2rem;
    font-weight: bold;

    &.boder-efect {
        position: relative;

        &::after {
            content: '';

            width: 100%;
            display: block;
            border-bottom: 8px black solid;
            position: absolute;
            bottom: -20px;
            left: 0;
            height: 10px;
        }
    }
`;

export const HeaderSubtittle = styled.h2`
    font-family: 'Poiret One', cursive;
    color: white;
    font-size: 2.6rem;
    margin: 0px;
`;

export const Paragraph = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 1.6rem;
    margin: 0px;
    margin-top: 2rem;
    font-style: italic;
    text-transform: lowercase;
`;

export const SmallElement = styled.small`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    cursor: pointer;


    & a {
        text-decoration: none !important;
    }
`;

export const ErrorMessage = styled.small`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-style: italic;
`;

export const ImgLogo = styled.img`
    max-width: 80px;
`;

export const Button = styled.button`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
    padding-left: 8rem;
    padding-right: 8rem;
    text-transform: uppercase;
    margin-top: 5rem;
    border: none !important;
    box-shadow: none !important;

    &.light {
        border-radius: 100px;
        background: #6FA9CF !important;
    }

    &.dark {
        background: #0D1A26 !important;
        border-radius: 5px;
    }
`;