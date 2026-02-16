import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reservations from './components/Reservations/Reservations';
import userEvent from '@testing-library/user-event';

const renderReservations = () =>
  render(
    <MemoryRouter>
      <Reservations />
    </MemoryRouter>
  );

test('Renders the BookingForm heading', () => {
    renderReservations();
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the label for the Name input', () => {
    renderReservations();
    const nameLabel = screen.getByLabelText('Name');
    expect(nameLabel).toBeInTheDocument();
});

test('Renders the label for the Phone Number input', () => {
  renderReservations();
  const phoneLabel = screen.getByLabelText('Phone Number');
  expect(phoneLabel).toBeInTheDocument();
});

test('Renders the label for the Date input', () => {
  renderReservations();
  const dateLabel = screen.getByLabelText('Date');
  expect(dateLabel).toBeInTheDocument();
});

test('Renders the label for the Time input', () => {
  renderReservations();
  const timeLabel = screen.getByLabelText('Time');
  expect(timeLabel).toBeInTheDocument();
});

test('Renders the text for the Number of Guests input', () => {
  renderReservations();
  const guestsLabel = screen.getByText('Number of Guests');
  expect(guestsLabel).toBeInTheDocument();
});

test('Renders the label for the Occasion input', () => {
  renderReservations();
  const occasionLabel = screen.getByLabelText('Occasion');
  expect(occasionLabel).toBeInTheDocument();
});

test('Submits the form with valid inputs', async () => {
  renderReservations();

  userEvent.type(screen.getByLabelText('Name'), 'Jane Smith');
  userEvent.type(screen.getByLabelText('Phone Number'), '5555555555');
  userEvent.type(screen.getByLabelText('Date'), '2026-06-01');
  userEvent.selectOptions(screen.getByLabelText('Time'), '17:00');
  userEvent.click(screen.getByText('+'));
  userEvent.selectOptions(screen.getByLabelText('Occasion'), 'Birthday');

  // TODO: Mock the alert will be removed from the app when proper success page is created
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  userEvent.click(screen.getByText('Reserve a Table'));

  expect(alertMock).toHaveBeenCalledTimes(1);

  alertMock.mockRestore();
});
