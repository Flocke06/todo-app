import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../App'
import { expect } from 'vitest';

/*
test('zeigt den Titel To-Do an', () => {
  render(<App />)
  expect(screen.getByText(/To-Do/i)).toBeInTheDocument()
})
*/


test('Test whether a empy task was not added to list', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Neue Aufgabe eingeben/i);
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
})

test('Test whether a task has been successfully added to the list', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Neue Aufgabe eingeben/i);
    fireEvent.change(input, { target: { value: "Milch kaufen" } });
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText('Milch kaufen')).toBeInTheDocument();
})


test("Test whether a task is successfully deleted from the list", () => {
    render(<App />)
    //hinzufügen
    const input = screen.getByPlaceholderText(/Neue Aufgabe eingeben/i)
    fireEvent.change(input, { target: { value: "Auto waschen" } })
    fireEvent.keyDown(input, { key: "Enter" })
    // Löschen
    const taskItem = screen.getByText("Auto waschen").closest('li');
    const deleteButton = within(taskItem).getByAltText(/trash/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Auto waschen")).not.toBeInTheDocument();
})


test("Test whether a many task was successfully added to list", () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Neue Aufgabe eingeben/i);

    ["Staubsaugen", "Fenster putzen", "Auto aussaugen"].forEach((task) => {
        fireEvent.change(input, { target: { value: task } });
        fireEvent.keyDown(input, { key: "Enter" });
    })

    expect(screen.getByText("Staubsaugen")).toBeInTheDocument();
    expect(screen.getByText("Fenster putzen")).toBeInTheDocument();
    expect(screen.getByText("Auto aussaugen")).toBeInTheDocument();
})

test("Test whether of checkbox is interactiv", () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Neue Aufgabe eingeben/i);
    fireEvent.change(input, { target: { value: "Bett machen" } });
    fireEvent.keyDown(input, { key: "Enter" });
    const allTask = screen.getAllByRole("checkbox");
    const lastTask = allTask[allTask.length - 1]
    const checkbox = lastTask;
    fireEvent.click(checkbox);
})
