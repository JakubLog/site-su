import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Input = styled(TextField)`
  --currentColor: ${({ theme }) => theme.color.primary};
  width: 100%;
  max-width: 500px;
  margin-inline: 20px;
  input {
    color: var(--currentColor);
    font-size: 20px;
  }
  label {
    color: var(--currentColor) !important;
  }
  .MuiInput-underline {
    &::before {
      border-bottom: 1px solid var(--currentColor);
      &:hover {
        border-bottom: 2px solid var(--currentColor);
      }
    }
    &::after {
      border-bottom: 3px solid var(--currentColor);
    }
  }
`;
