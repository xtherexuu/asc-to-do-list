import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 85%;
    margin: 0 auto;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        max-width: 95%;
    }
    @media(max-width: ${({theme}) => theme.breakpoints.smallmobile}) {
        max-width: 100%;
    }
`;

export const Heading = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    @media(max-width: ${({theme}) => theme.breakpoints.smallpc}) {
        font-size: 3.5rem;
    }
    @media(max-width: ${({theme}) => theme.breakpoints.smallmobile}) {
        font-size: 3rem;
    }
`