import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-block: 50px;
  @media (min-width: 1350px) {
    padding-inline: 60px;
    position: relative;
    margin-block: 70px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 27px;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  @media (min-width: 1350px) {
    text-align: left;
    padding: 0;
    padding-left: 25px;
    padding-bottom: 10px;
    padding-right: 60px;
    width: fit-content;
    border-bottom: 3px solid ${({ theme }) => theme.color.primary};
    font-size: 40px;
    color: ${({ theme }) => theme.color.primary};
    background-color: unset;
  }
`;
export const Content = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  text-align: justify;
  line-height: 1.3;
  margin-block: 30px;
  @media (min-width: 1350px) {
    line-height: 1.5;
    font-size: 25px;
    margin-block: 70px;
    padding-inline: 60px;
  }
`;
export const Author = styled.h2`
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 1px;
  border-top: 3px solid ${({ theme }) => theme.color.primary};
  @media (min-width: 1350px) {
    text-align: right;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(95, 92, 112, 0.6);
  @media (min-width: 1350px) {
    width: fit-content;
    opacity: 0.3;
    position: absolute;
    right: 75px;
    top: 35px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  @media (min-width: 1350px) {
    max-height: 350px;
  }
`;
