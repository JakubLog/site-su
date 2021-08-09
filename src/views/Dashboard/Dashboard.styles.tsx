import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  & > * {
    flex-shrink: 0;
  }
`;
export const Body = styled.div`
  font-size: 25px;
  width: 50vw;
`;
