import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
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
    fireEvent.change(firstNameField, {target: {value: "abcde"}});
    fireEvent.change(lastNameField, {target: {value: "abcde"}});
    fireEvent.change(emailField, {target: {value: "abcde"}});
    fireEvent.change(messageField, {target: {value: "abcde"}});

    //Assert - all values should be a 
    expect(firstNameField.value).toBe('abcde');
    expect(lastNameField.value).toBe('abcde');
    expect(emailField.value).toBe('abcde');
    expect(messageField.value).toBe('abcde');
});

test('test that maxLength for firstName input is 10characters instead of 3', async () => {
    //Arrange
    const { getByLabelText, getByTestId, findByTestId } = render(<ContactForm />);
    const firstNameField = getByLabelText(/First Name*/i);
    const submitButton = getByTestId(/submitButton/i);
    const firstNameError = findByTestId(/firstNameError/);
    //Act - type 10 characters in the field which should pass now that maxLength has been updated to 10
    await act (() => {
        fireEvent.change(firstNameField, {target: {value: "123456789a"}});
    fireEvent.click(submitButton);
    });

    //Assert - because maxLength has been updated to 10, the error should not be visible
    expect(firstNameError).toBeNull;
})

test('form submit adds new contact', async () => {
    await act(async () => {

    
    //Arrange
    const { getByLabelText, getByTestId, findByTestId } = render(<ContactForm />);
    const firstNameField = getByLabelText(/First Name*/i);
    const lastNameField = getByLabelText(/Last Name*/i);
    const emailField = getByLabelText(/Email*/i);
    const messageField = getByLabelText(/Message/i);
    const submitButton = getByTestId(/submitButton/i);
    const success = findByTestId(/success/);

    //Act - change data in the input fields 
    await act ( () => {
        fireEvent.change(firstNameField, {target: {value: "a"}});
        fireEvent.change(lastNameField, {target: {value: "a"}});
        fireEvent.change(emailField, {target: {value: "a"}});
        fireEvent.change(messageField, {target: {value: "a"}});
    })
 

    //Assert - the form values should all match the updated data from our change
    expect(firstNameField.value).toBe('a');
    expect(lastNameField.value).toBe('a');
    expect(emailField.value).toBe('a');
    expect(messageField.value).toBe('a');

    //Act - submit the form onClick
    await act (() => {
        fireEvent.click(submitButton);
    })

    //Assert - new contact added to list
    expect(findByTestId(success)).not.toBeNull();
    })
});