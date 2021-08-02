import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  @media (min-width: 1350px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 5px;
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  width: fit-content;
  padding-inline: 25px;
  padding-bottom: 10px;
  border-bottom: 5px solid ${({ theme }) => theme.color.primary};
  margin: 0 auto;
`;
export const Body = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
`;
