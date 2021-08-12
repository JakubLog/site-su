import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import Signin from 'views/Signin/Signin';

describe('Authorization tests', () => {
  it('Renders component', async () => {
    render(<Signin />, {});
    await screen.findAllByText('Zaloguj się');
  });
  it('Droping error when bad email', async () => {
    render(<Signin />, {});
    const email = await screen.findByPlaceholderText('example@gmail.com');
    const btn = await screen.findByLabelText(/signin btn/i);
    fireEvent.change(email, { target: { value: 'fkds@' } });
    fireEvent.click(btn);
    await screen.findByText('Podaj prawidłowy email!');
    await screen.findByText('Hasło powinno zawierać conajmniej 6 znaków!');
  });
  it('Allows to login in', async () => {
    render(<Signin />, {});
    const email = await screen.findByPlaceholderText('example@gmail.com');
    const password = await screen.findByPlaceholderText('Type your password...');
    const btn = await screen.findByLabelText(/signin btn/i);
    fireEvent.change(email, { target: { value: 'admin@admin.pl' } });
    fireEvent.change(password, { target: { value: 'Kuba2007' } });
    fireEvent.click(btn);
  });
});
