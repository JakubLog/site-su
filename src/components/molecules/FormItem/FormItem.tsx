import React from 'react';
import PropTypes from 'prop-types';
import { FormItemWrapper, Link, Title } from './FormItem.styles';

interface props {
  title: string;
  src: string;
}

const FormItem = ({ title, src }: props): JSX.Element => {
  return (
    <FormItemWrapper>
      <Link href={src}>
        <Title>{title}</Title>
      </Link>
    </FormItemWrapper>
  );
};

FormItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default FormItem;
