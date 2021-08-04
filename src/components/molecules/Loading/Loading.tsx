import React from 'react';
import { LoadingWrapper, LoadingItem } from './Loading.styles';

const Loading = (): JSX.Element => {
  return (
    <LoadingWrapper>
      <p id="loadingInfo">Loading...</p>
      <LoadingItem />
    </LoadingWrapper>
  );
};

export default Loading;
