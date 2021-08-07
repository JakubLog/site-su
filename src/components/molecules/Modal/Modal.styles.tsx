import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 700px;
  height: 450px;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 15px 20px;
  z-index: 1000;
  box-shadow: 0 5px 20px -13px black;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.6;
  z-index: 900;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  padding-bottom: 10px;
  padding-left: 5px;
  border-bottom: 3px solid ${({ theme }) => theme.color.primary};
  margin-bottom: 15px;
  @media (min-width: 1350px) {
    font-size: 35px;
    margin-bottom: 20px;
    border-bottom: 4px solid ${({ theme }) => theme.color.primary};
  }
`;

export const Body = styled.div`
  overflow: auto;
  height: 280px;
  margin-bottom: 20px;
  * {
    margin: 0;
  }
`;

export const CloseButton = styled(Button)`
  width: 100%;
`;
