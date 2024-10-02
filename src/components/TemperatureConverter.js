import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const farenheitValue = (value * 9/5) + 32;
      setFahrenheit(farenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const celsiusValue = (value - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <Box sx={{ display: 'flex',
               flexDirection: 'column', 
               alignItems: 'center', 
               gap: 2, 
               maxWidth: 300, 
               margin: 'auto', 
               padding: 5 }}>
      <TextField
        label="Температура в Цельсиях"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
      />
      <TextField
        label="Температура в Фаренгейтах"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
      />
    </Box>
  );
};
export default TemperatureConverter;