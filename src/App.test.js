import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reservations from './components/Reservations/Reservations';
import userEvent from '@testing-library/user-event';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
  window.submitAPI = jest.fn(() => true);
  mockNavigate.mockClear();
});

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

test('Submits the form with valid inputs', () => {
  renderReservations();

  userEvent.type(screen.getByLabelText('Name'), 'Jane Smith');
  userEvent.type(screen.getByLabelText('Phone Number'), '5555555555');
  userEvent.type(screen.getByLabelText('Date'), '2026-06-01');
  userEvent.selectOptions(screen.getByLabelText('Time'), '17:00');
  userEvent.click(screen.getByText('+'));
  userEvent.selectOptions(screen.getByLabelText('Occasion'), 'Birthday');

  expect(window.fetchAPI).toHaveBeenLastCalledWith(new Date('2026-06-01'));

  userEvent.click(screen.getByText('Reserve a Table'));

  expect(window.submitAPI).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/confirmation', expect.anything());
});

test('Shows validation errors for invalid inputs', () => {
  renderReservations();

  userEvent.type(screen.getByLabelText('Name'), 'Jo');
  userEvent.type(screen.getByLabelText('Phone Number'), '123');
  userEvent.type(screen.getByLabelText('Date'), '');
  userEvent.selectOptions(screen.getByLabelText('Time'), '');
  expect(screen.getByText('0')).toBeInTheDocument();
  userEvent.selectOptions(screen.getByLabelText('Occasion'), '');

  userEvent.click(screen.getByText('Reserve a Table'));

  expect(screen.getByText('Name must be at least 3 characters.')).toBeInTheDocument();
  expect(screen.getByText('Please enter a valid 10-digit phone number.')).toBeInTheDocument();
  expect(screen.getByText('Please select a date.')).toBeInTheDocument();
  expect(screen.getByText('Please select a time.')).toBeInTheDocument();
  expect(screen.getByText('Please add at least 1 guest.')).toBeInTheDocument();
  expect(screen.getByText('Please select an occasion.')).toBeInTheDocument();

  expect(window.submitAPI).not.toHaveBeenCalled();
  expect(mockNavigate).not.toHaveBeenCalled();
});
