import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const Site = styled.div`
  padding-top: 80px;
  padding-inline: 30px;
  padding-bottom: 40px;
  @media (min-width: 1350px) {
    padding: 0;
    padding-block: 30px;
    padding-inline: 10%;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 25px;
  border-top: 4.5px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  * {
    opacity: 0.8;
  }
  #first {
    font-size: 18px;
  }
  #second {
    font-size: 14px;
  }
  @media (min-width: 1350px) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    * {
      font-size: 15px !important;
    }
  }
`;
