import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchAccounts = async () => {
  // Replace with your API endpoint
  const response = await axios.get('https://api.example.com/accounts');
  return response.data;
};

const addAccount = async (newAccount) => {
  // Replace with your API endpoint
  const response = await axios.post('https://api.example.com/accounts', newAccount);
  return response.data;
};

function Accounts() {
  const [newAccountName, setNewAccountName] = useState('');
  const queryClient = useQueryClient();

  const { data: accounts, isLoading, isError } = useQuery('accounts', fetchAccounts);

  const addAccountMutation = useMutation(addAccount, {
    onSuccess: () => {
      queryClient.invalidateQueries('accounts');
      setNewAccountName('');
    },
  });

  const handleAddAccount = (e) => {
    e.preventDefault();
    addAccountMutation.mutate({ name: newAccountName });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching accounts</div>;

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Accounts</h1>
      <form onSubmit={handleAddAccount} className="mb-4">
        <input
          type="text"
          value={newAccountName}
          onChange={(e) => setNewAccountName(e.target.value)}
          placeholder="New Account Name"
          className="bg-gray-700 text-white rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Account
        </button>
      </form>
      <ul className="bg-gray-800 rounded p-4">
        {accounts.map((account) => (
          <li key={account.id} className="mb-2">{account.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Accounts;