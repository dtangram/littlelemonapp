import { useState } from 'react';
import { formatPhoneNumber, phoneRegex } from '../utils/formatPhoneNumber';

const useReservationsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

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
    setDate(e.target.value);
    clearError('date');
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    clearError('time');
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    clearError('occasion');
  };

  const validate = () => {
    const newErrors = {};
    if (name.trim().length < 3) newErrors.name = 'Name must be at least 3 characters.';
    if (!phoneRegex.test(phone)) newErrors.phone = 'Please enter a valid 10-digit phone number.';
    if (!date) newErrors.date = 'Please select a date.';
    if (!time) newErrors.time = 'Please select a time.';
    if (!occasion) newErrors.occasion = 'Please select an occasion.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert(`Submitted!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nOccasion: ${occasion}`);
  };

  return {
    name,
    phone,
    date,
    time,
    occasion,
    errors,
    handleNameChange,
    handlePhoneChange,
    handleDateChange,
    handleTimeChange,
    handleOccasionChange,
    handleSubmit,
  };
};

export default useReservationsForm;