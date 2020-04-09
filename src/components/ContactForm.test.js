import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('test that all inputs are visible', () => {
    //Arrange - set up the testing environment
    const { getByLabelText } = render(<ContactForm />);

    //ACT
    const firstNameField = getByLabelText(/First Name*/i);
    const lastNameField = getByLabelText(/Last Name*/i);
    const emailField = getByLabelText(/Email*/i);
    const messageField = getByLabelText(/Message/i);

    //Assert
    expect(firstNameField).toBeVisible();
    expect(lastNameField).toBeVisible();
    expect(emailField).toBeVisible();
    expect(messageField).toBeVisible();
});