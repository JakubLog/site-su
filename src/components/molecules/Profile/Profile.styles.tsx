import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  height: auto;
  padding: 25px;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.primary};
  padding-bottom: 15px;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.secondary};
`;
export const Name = styled.h2`
  text-align: center;
  font-size: 28px;
`;
