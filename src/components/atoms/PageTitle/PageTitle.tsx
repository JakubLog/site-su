import styled from 'styled-components';

export const PageTitle = styled.h1`
  visibility: hidden;
  font-size: 30px;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.secondaryDarken};
  text-align: center;
  margin-left: -30px;
  padding-block: 10px;
  margin-block: 50px;
  @media (min-width: 1350px) {
    margin: 0;
    padding: 0;
    width: unset;
    font-size: 40px;
    margin-block: 50px;
    background-color: unset;
  }
`;
