import { Button as MButton } from '@material-ui/core';
import styled from 'styled-components';

export const Button = styled(MButton)`
  background-color: ${({ theme }) => theme.color.primary} !important;
  color: ${({ theme }) => theme.color.secondary} !important;
`;
