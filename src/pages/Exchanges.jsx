import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';

const API_URL = 'https://api.example.com';

const fetchExchanges = async () => {
  try {
    const response = await axios.get(`${API_URL}/exchanges`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    throw new Error('Failed to fetch exchanges');
  }
};

const addExchange = async (newExchange) => {
  try {
    const response = await axios.post(`${API_URL}/exchanges`, newExchange);
    return response.data;
  } catch (error) {
    console.error('Error adding exchange:', error);
    throw new Error('Failed to add exchange');
  }
};

const testConnection = async (exchange) => {
  try {
    const response = await axios.post(`${API_URL}/exchanges/test-connection`, exchange);
    return response.data;
  } catch (error) {
    console.error('Error testing connection:', error);
    throw new Error('Failed to test connection');
  }
};

const disconnectExchange = async (exchangeId) => {
  try {
    const response = await axios.delete(`${API_URL}/exchanges/${exchangeId}`);
    return response.data;
  } catch (error) {
    console.error('Error disconnecting exchange:', error);
    throw new Error('Failed to disconnect exchange');
  }
};

function Exchanges() {
  // ... (rest of the component remains the same)

  const { data: exchanges, isLoading, isError } = useQuery('exchanges', fetchExchanges, {
    retry: 3,
    retryDelay: 1000,
    onError: (error) => console.error('Query error:', error),
  });

  const addExchangeMutation = useMutation(addExchange, {
    onSuccess: () => {
      queryClient.invalidateQueries('exchanges');
      setNewExchange({ name: '', apiKey: '', secretKey: '' });
      setError('');
      setTestResult(null);
    },
    onError: (error) => {
      setError(error.message || 'An error occurred while adding the exchange.');
    },
  });

  const testConnectionMutation = useMutation(testConnection, {
    onSuccess: (data) => {
      setTestResult({ success: true, message: 'Connection successful!' });
    },
    onError: (error) => {
      setTestResult({ success: false, message: error.message || 'Connection failed.' });
    },
  });

  const disconnectExchangeMutation = useMutation(disconnectExchange, {
    onSuccess: () => {
      queryClient.invalidateQueries('exchanges');
    },
    onError: (error) => {
      setError(error.message || 'An error occurred while disconnecting the exchange.');
    },
  });

  // ... (rest of the component remains the same)
}

export default Exchanges;