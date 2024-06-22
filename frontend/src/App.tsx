import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';
import LoginForm from './Login/LoginForm';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <>
        <QueryClientProvider client={queryClient}>
    <LoginForm></LoginForm>
    </QueryClientProvider>

    </>
  );
}

export default App;
