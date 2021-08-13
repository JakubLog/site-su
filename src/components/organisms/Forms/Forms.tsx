import React from 'react';
import PropTypes from 'prop-types';
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

const Forms = ({ array }: props): JSX.Element => {
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

Forms.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, title: PropTypes.string.isRequired, link: PropTypes.string.isRequired })
  )
};

export default Forms;
