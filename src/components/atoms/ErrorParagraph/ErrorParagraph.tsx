import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-15px);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ErrorParagraph = styled.p`
  color: red;
  margin: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;
