import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondaryDarken};
  font-size: 45px;
  * {
    margin: 0 40px;
  }
  #loadingInfo {
    display: none;
    @media (min-width: 1350px) {
      display: block;
    }
  }
`;

export const LoadingItem = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.primary};
  animation: ${rotate} 2s infinite;
  border-radius: 50%;
  position: relative;
  &::after {
    content: '';
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.secondaryDarken};
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.color.secondaryDarken};
  }
`;
