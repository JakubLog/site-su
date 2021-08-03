import React from 'react';
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

export default FormItem;
