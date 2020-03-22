import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("Renders App without crashing", () => {
  render(<App />);
});

test("Rendering form inputs", () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test("Validating inputs", () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  expect(firstNameInput).toHaveAttribute("type");
  expect(lastNameInput).toHaveAttribute("type");
  expect(emailInput).toHaveAttribute("type");
  expect(messageInput).toHaveAttribute("type");
})

test("Sending user data", async () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "Jose" } });
  fireEvent.change(lastNameInput, { target: { value: "Perez" } });
  fireEvent.change(emailInput, { target: { value: "pjose14.jp38@yahoo.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello Jose" } });

  expect(firstNameInput.value).toBe("Jose");
  expect(lastNameInput.value).toBe("Perez");
  expect(emailInput.value).toBe("pjose14.jp38@yahoo.com");
  expect(messageInput.value).toBe("Hello Jose");

  await act(async () => {
    fireEvent.click(getByTestId(/button/i));
  });
});