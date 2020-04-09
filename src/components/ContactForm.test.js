import React from "react";
import { render, fireEvent, findByTestId } from '@testing-library/react';
import ContactForm from "./ContactForm";
import { act } from 'react-dom/test-utils';

test("check tests", () => {
    async () => {}
});

test("are labels visible", () => {
    const { getByText } = render(<ContactForm/>);

    const  firstNameLabel = getByText(/First Name*/i);
    const  lastNameLabel = getByText(/Last Name*/i);
    const  emailLabel = getByText(/Email*/i);
    const  messageLabel = getByText(/Message*/i);

    expect(firstNameLabel).toBeVisible();
    expect(lastNameLabel).toBeVisible();
    expect(emailLabel).toBeVisible();
    expect(messageLabel).toBeVisible();
});

test("are inputs visible", () => {
    const { getByLabelText } = render(<ContactForm/>);

    const firstNameInput = getByLabelText(/First Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message*/i);

    expect(firstNameInput).toBeVisible();
    expect(lastNameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(messageInput).toBeVisible();
    });

test("does form submit add new users to the list", () => {
    const { getByLabelText, getByTestId, findByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);

    act(() => {
    fireEvent.change(firstNameInput, { target: { value: 'Sam' } });
    fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
    fireEvent.change(emailInput, { target: { value: 'samsmith@gmail.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is my contact info' } });
    })

    expect(firstNameInput.value).toBe('Sam');
    expect(lastNameInput.value).toBe('Smith');
    expect(emailInput.value).toBe('samsmith@gmail.com');
    expect(messageInput.value).toBe('This is my contact info');

    const submitButton = getByTestId("submitButton");
    async () => {
        act(async () => {
            fireEvent.click(submitButton);

            const formData =  await findByTestId("preData")

            expect(formData).toBeInTheDocument();
        })
    }
});
