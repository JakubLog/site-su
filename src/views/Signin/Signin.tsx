import React, { useRef, useEffect, useState } from 'react';
import { PageTitle } from 'components/atoms/PageTitle/PageTitle';
import { gsap, Back } from 'gsap';
import { useForm } from 'react-hook-form';
import { Form } from './Signin.styles';
import { Button } from 'components/atoms/Button/Button';
import { ErrorParagraph } from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { Input } from 'components/atoms/Input/Input';
import { useAuth } from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';

// TypeScript Interfaces
interface loginProps {
  email: string;
  password: string;
}

const Sigin = (): JSX.Element => {
  // Global States
  const [firebaseError, setFirebaseError] = useState(null);
  const history = useHistory();

  // GSAP Title Animation
  const title = useRef(null);
  useEffect(() => {
    gsap.set(title.current, { visibility: 'visible' });

    if (window.innerWidth >= 1350) {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(title.current, { duration: 0.6, opacity: 0, y: 50, ease: Back.easeOut.config(2) });
    }
  }, []);

  // Auth hook
  const { signIn } = useAuth();

  // React Form Service
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm();

  const process = async ({ email, password }: loginProps) => {
    setFirebaseError(null);
    try {
      await signIn(email, password);
      history.push('/');
    } catch (e) {
      setFirebaseError('Podano złe dane logowania!');
    }
  };

  return (
    <>
      <PageTitle ref={title}>Zaloguj się</PageTitle>
      <Form onSubmit={handleSubmit(process)}>
        <Input
          id="email"
          type="text"
          label="Email"
          placeholder="example@gmail.com"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <Input id="email" type="password" label="Hasło" {...register('password', { required: true, minLength: 6 })} />
        {formErrors.email && <ErrorParagraph>Podaj prawidłowy email!</ErrorParagraph>}
        {formErrors.password && <ErrorParagraph>Hasło powinno zawierać conajmniej 6 znaków!</ErrorParagraph>}
        {firebaseError && <ErrorParagraph>{firebaseError}</ErrorParagraph>}
        <Button type="submit" style={{ width: '100%', maxWidth: '400px' }}>
          Zaloguj się
        </Button>
      </Form>
    </>
  );
};

export default Sigin;
