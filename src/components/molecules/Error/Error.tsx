import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorTitle, ErrorMessage } from './Error.styles';

interface props {
  message: string;
}

const defaultMessage = 'Sorry, something went wrong. Please, contact with our support team.';

const Error: React.FC<props> = ({ message = defaultMessage }) => {
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
