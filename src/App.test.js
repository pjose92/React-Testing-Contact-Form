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