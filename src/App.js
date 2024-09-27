import React, { useState, useMemo, useEffect } from 'react';
import Quiz from './components/Quiz';
import { Container, Typography, CssBaseline, Box, Switch, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const App = () => {
  // Retrieve the user's theme preference from localStorage, default to light
  const storedThemePreference = localStorage.getItem('preferredTheme') || 'light';
  const [mode, setMode] = useState(storedThemePreference);

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('preferredTheme', mode);
  }, [mode]);

  // Memoize the theme to optimize performance
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: '#1976d2', // Customize your primary color
          },
          background: {
            default: mode === 'light' ? '#fafafa' : '#121212',
            paper: mode === 'light' ? '#fff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: 'monospace, sans-serif', // Set the font family
        },
      }),
    [mode]
  );

  // Handler to toggle the theme
  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container>
        {/* Header with Title and Theme Toggle */}
        <Box display="flex" justifyContent="space-around" alignItems="center" my={2}>
          <Typography variant="h2" sx={{ margin: 0 }}>
            Dev Reps
          </Typography>
          <FormControlLabel
            control={<Switch checked={mode === 'dark'} onChange={handleThemeToggle} color="primary" />}
            label={mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          />
        </Box>
        {/* Quiz Component */}
        <Quiz />
      </Container>
    </ThemeProvider>
  );
};

export default App;
