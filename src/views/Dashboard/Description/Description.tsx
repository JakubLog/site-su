import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { db } from '../../../firebase';
import { useForm } from 'react-hook-form';
import { Form, StyledTitle, StyledTextarea, StyledErrorParagraph } from './Description.styles';

interface props {
  about: string;
  docId: string;
}

const Description = ({ about, docId }: props): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const process = ({ about }: props) => {
    db.collection('members').doc(docId).update({
      Description: about
    });
  };
  return (
    <Form onSubmit={handleSubmit(process)}>
      <StyledTitle>Powiedz nam coś o sobie</StyledTitle>
      <StyledTextarea aria-label="description" placeholder={about} id="about" {...register('about', { required: true })} />
      {errors.about && <StyledErrorParagraph>Uzupełnij pole!</StyledErrorParagraph>}
      <Button type="submit">Zapisz zmiany</Button>
    </Form>
  );
};

export default Description;
