import styled from 'styled-components';

export const HeroWrapper = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  * {
    margin: 0;
  }
  @media (min-width: 1350px) {
    min-height: calc(100vh - 130px);
  }
`;

export const HeroTitle = styled.h1`
  visibility: hidden;
  font-size: 35px;
  margin-bottom: 3px;
  @media (min-width: 1350px) {
    font-size: 60px;
    margin-bottom: 5px;
  }
`;

export const HeroSubtitle = styled.h3`
  visibility: hidden;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 25px;
  @media (min-width: 1350px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
