import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  `;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  
  & img {
      width: 100%;
    }
    `;

export const TextContainer = styled.div`
  text-align: center;

  & h2 {
    margin: 0;
    padding: 0;
  }
`;
