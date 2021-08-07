import styled from 'styled-components';

export const MembersWrapper = styled.div`
  margin-top: 25px;
  & > * {
    margin: 0 auto;
  }
  @media (min-width: 1350px) {
    margin-top: 50px;
    & > * {
      margin: unset;
    }
    display: flex;
    justify-content: space-evenly;
  }
`;
export const MembersGroup = styled.div`
  width: 100%;
  &:not(:first-child) {
    margin-top: 30px;
  }
  @media (min-width: 1350px) {
    &:not(:first-child) {
      margin-top: 0px;
    }
    margin-inline: 25px;
  }
`;
export const GroupTitle = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  margin: 0;
`;
export const GroupBody = styled.div`
  border-top: 4px solid ${({ theme }) => theme.color.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1350px) {
    display: flex;
    justify-content: flex-start;
  }
`;
