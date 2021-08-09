import styled from 'styled-components';
import { ErrorParagraph } from 'components/atoms/ErrorParagraph/ErrorParagraph';

export const Form = styled.form`
  margin-block: 30px;
  margin-inline: 5px;
`;

export const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 15px;
`;

export const StyledTextarea = styled.textarea`
  font-size: 20px;
  padding: 15px;
  color: ${({ theme }) => theme.color.primary};
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.secondaryDarken};
  border: 3px solid ${({ theme }) => theme.color.primary};
  resize: vertical;
`;

export const StyledErrorParagraph = styled(ErrorParagraph)`
  font-size: 18px;
  margin-block: 15px;
`;
