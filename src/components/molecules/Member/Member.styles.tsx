import styled from 'styled-components';

export const Info = styled.div`
  margin-top: 30px;
  * {
    text-align: center;
    margin: 0;
    line-height: 1.2;
  }
  @media (min-width: 1350px) {
    margin-left: 25px;
    * {
      text-align: left;
    }
  }
`;
export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:last-child {
    ${Info} {
      margin-bottom: 80px;
    }
  }
  width: 100%;
  padding-block: 25px;
  @media (min-width: 1350px) {
    flex-direction: row;
    justify-content: flex-start;
    &:last-child {
      ${Info} {
        margin-bottom: 50px;
      }
    }
    ${Info} {
      margin-bottom: 50px;
    }
    padding: 50px 25px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryDarken};
    cursor: pointer;
  }
`;
export const Image = styled.div`
  height: 200px;
  @media (min-width: 1350px) {
    height: 150px;
  }
`;
export const PersonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.primary};
  @media (min-width: 1350px) {
    width: 150px;
    height: 150px;
  }
`;
export const Name = styled.h2``;
export const Permissions = styled.h3`
  font-weight: 400;
  letter-spacing: 2px;
`;
