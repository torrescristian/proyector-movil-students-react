import styled from 'styled-components';

export const Display = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  @media only screen and (orientation: landscape) {
    grid-template-rows: 1fr;
  }
`;

export const Img = styled.img`
  height: auto;
  object-fit: contain;
  width: 100%;
  @media only screen and (orientation: landscape) {
    width: auto;
    height: 100vh;
    padding: 1vw;
  }
`;

export const Instructions = styled.div`
  @media only screen and (orientation: landscape) {
    display: none;
  }
`;

export const InstructionHighlighted = styled.span`
  text-decoration: underline;
`;
