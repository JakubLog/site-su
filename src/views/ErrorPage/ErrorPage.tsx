import React from 'react';
import { Bold } from 'components/atoms/Bold/Bold';
import { Wrapper, Block, Title, Content } from './ErrorPage.styles';

const ErrorPage: React.FC = () => {
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
