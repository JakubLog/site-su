import styled, { keyframes } from 'styled-components';

const sliceIn = keyframes`
  from {transform: translateX(-500%)} to {transform: translateX(-50%)};
`;

const sliceOut = keyframes`
  from {transform: translateX(-50%)} to {transform: translateX(500%)};
`;

export const ErrorWrapper = styled.div`
  --redColor: hsl(0, 60%, 40%);
  width: 100%;
  max-width: 450px;
  min-height: 200px;
  position: absolute;
  bottom: 30px;
  border-radius: 25px;
  color: var(--redColor);
  background-color: ${({ theme }) => theme.color.secondary};
  border: 5px solid var(--redColor);
  box-shadow: 0 5px 20px -10px black;
  left: 50%;
  transform: translateX(-500%);
  animation: ${sliceIn} 2s forwards, ${sliceOut} 1.5s 6s forwards;
  padding: 15px 20px;
  * {
    margin: 0;
  }
`;
export const ErrorTitle = styled.h1`
  --redColor: hsl(0, 60%, 40%);
  padding-bottom: 7px;
  border-bottom: 4px solid var(--redColor);
  margin-bottom: 15px;
`;
export const ErrorMessage = styled.p`
  letter-spacing: 0.5px;
`;
