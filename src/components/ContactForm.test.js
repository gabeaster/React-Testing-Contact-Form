import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('Test that values can be entered into each field', () => {
    //Arrange
    const { getByLabelText } = render(<ContactForm />);

    const firstNameField = getByLabelText(/First Name*/i);
    const lastNameField = getByLabelText(/Last Name*/i);
    const emailField = getByLabelText(/Email*/i);
    const messageField = getByLabelText(/Message/i);

    //Act-type a character into the field
    fireEvent.change(firstNameField, {target: {value: "a"}});
    fireEvent.change(lastNameField, {target: {value: "a"}});
    fireEvent.change(emailField, {target: {value: "a"}});
    fireEvent.change(messageField, {target: {value: "a"}});

    //Assert
    expect(firstNameField.value).toBe('a');
    expect(lastNameField.value).toBe('a');
    expect(emailField.value).toBe('a');
    expect(messageField.value).toBe('a');

    
})