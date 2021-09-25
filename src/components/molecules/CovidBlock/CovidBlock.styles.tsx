import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  @media (min-width: 978px) {
    flex-direction: row;
  }
`;

export const PolandMap = styled.div`
  overflow: hidden;
  @media (min-width: 978px) {
    width: 50%;
  }
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
  margin-top: 25px;
`;

export const Informations = styled.dl`
  border-bottom: 3px solid ${({ theme }) => theme.color.purpleLight};
  width: 100%;
  padding-block: 25px;
  padding-left: 40px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  align-items: center;
  grid-gap: 10px;
  position: relative;
  &::after {
    content: '*Raport dot. ostatnich 24 godzin.';
    position: absolute;
    bottom: -5px;
    left: 40px;
    font-weight: 700;
    opacity: 0.6;
  }
  dt {
    font-size: 23px;
    font-weight: 700;
    position: relative;
    width: fit-content;
    &::after {
      content: ':';
      position: absolute;
      right: -9px;
    }
  }
  dd {
    font-size: 20px;
  }
  @media (min-width: 700px) {
    grid-template-columns: 30% 70%;
  }
  @media (min-width: 978px) {
    width: 50%;
    border: none;
    dt {
      font-size: 35px;
    }
    dd {
      font-size: 30px;
    }
  }
`;
