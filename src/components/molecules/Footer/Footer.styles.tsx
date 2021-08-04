import styled from 'styled-components';

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  list-style-type: none;
  padding: 0px;
  width: 190px;
  padding-right: 120px;
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const FooterWrapper = styled.div`
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

export const Social = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  * {
    font-size: 20px !important;
  }
  transition: 0.3s opacity ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
