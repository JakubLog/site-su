import styled from 'styled-components';

export const Bar = styled.div`
  width: 300px;
  margin-right: 20px;
  height: 750px;
  border: 3px solid ${({ theme }) => theme.color.primary};
`;
