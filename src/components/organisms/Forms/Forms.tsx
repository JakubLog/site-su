/* eslint-disable react/prop-types */
import React from 'react';
import { FormsWrapper } from './Forms.styles';
import FormItem from 'components/molecules/FormItem/FormItem';

interface Form {
  id: string;
  title: string;
  link: string;
}

interface props {
  array: Form[];
}

const Forms: React.FC<props> = ({ array }) => {
  return (
    <FormsWrapper>
      {array.length <= 0 ? (
        <p>Aktualnie brak aktywnych ankiet...</p>
      ) : (
        array.map(({ id, title, link }) => <FormItem key={id} title={title} src={link} />)
      )}
    </FormsWrapper>
  );
};

export default Forms;
