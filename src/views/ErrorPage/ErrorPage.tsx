import { Bold } from 'components/atoms/Bold/Bold';
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Block = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  padding: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
`;

export const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 84%;
  & > * {
    margin: 0;
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 1px;
  }
`;

const ErrorPage = (): JSX.Element => {
  return (
    <Wrapper>
      <Block>
        <Title>Something went wrong...</Title>
        <Content>
          <p>
            {/* eslint-disable-next-line no-restricted-globals */}
            We so sorry... but there&apos;s no page like: <Bold>/{location.href.split('/')[3]}</Bold>
          </p>
          <p>If it&apos;s problem with site, please contact with us!</p>
        </Content>
      </Block>
    </Wrapper>
  );
};

export default ErrorPage;
