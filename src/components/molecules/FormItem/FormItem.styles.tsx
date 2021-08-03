import styled from 'styled-components';

export const FormItemWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.primary};
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    opacity: 1;
  }
  border-radius: 5px;
  @media (min-width: 1350px) {
    border-radius: 0px;
  }
`;
export const Link = styled.a.attrs({ target: '_blank' })`
  padding: 0 20px;
  text-decoration: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
