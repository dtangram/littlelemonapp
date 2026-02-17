/* global submitAPI */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCounter from './useCounter';
import { formatPhoneNumber, phoneRegex } from '../utils/formatPhoneNumber';

const useBookingForm = ({ onDateChange } = {}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const { count, increment, decrementHandler, reset } = useCounter();

  const clearError = (field) => {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    clearError('name');
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
    clearError('phone');
  };

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    clearError('date');
    if (onDateChange) onDateChange(selected);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    clearError('time');
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    clearError('occasion');
  };

  const handleIncrement = () => {
    increment();
    clearError('guestCount');
  };

  const handleReset = () => {
    reset();
    clearError('guestCount');
  };

  const validate = () => {
    const newErrors = {};
    if (name.trim().length < 3) newErrors.name = 'Name must be at least 3 characters.';
    if (!phoneRegex.test(phone)) newErrors.phone = 'Please enter a valid 10-digit phone number.';
    if (!date) newErrors.date = 'Please select a date.';
    if (!time) newErrors.time = 'Please select a time.';
    if (!occasion) newErrors.occasion = 'Please select an occasion.';
    if (count < 1) newErrors.guestCount = 'Please add at least 1 guest.';
    return newErrors;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = { name, phone, date, time, occasion, guestCount: count };
    const success = submitAPI(formData);

    if (success) {
      navigate('/confirmation', { state: { reservationData: formData } });
    } else {
      alert('Failed to submit reservation. Please try again.');
    }
  };

  return {
    name,
    phone,
    date,
    time,
    occasion,
    errors,
    count,
    handleIncrement,
    decrementHandler,
    handleReset,
    handleNameChange,
    handlePhoneChange,
    handleDateChange,
    handleTimeChange,
    handleOccasionChange,
    handleSubmit,
  };
};

export default useBookingForm;