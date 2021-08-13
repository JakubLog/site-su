import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorTitle, ErrorMessage } from './Error.styles';

interface props {
  message: string;
}

const Error = ({ message }: props): JSX.Element => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Ooops!</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorWrapper>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
