import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchLabels = async () => {
  // Replace with your API endpoint
  const response = await axios.get('https://api.example.com/labels');
  return response.data;
};

const addLabel = async (newLabel) => {
  // Replace with your API endpoint
  const response = await axios.post('https://api.example.com/labels', newLabel);
  return response.data;
};

function Labels() {
  const [newLabelName, setNewLabelName] = useState('');
  const queryClient = useQueryClient();

  const { data: labels, isLoading, isError } = useQuery('labels', fetchLabels);

  const addLabelMutation = useMutation(addLabel, {
    onSuccess: () => {
      queryClient.invalidateQueries('labels');
      setNewLabelName('');
    },
  });

  const handleAddLabel = (e) => {
    e.preventDefault();
    addLabelMutation.mutate({ name: newLabelName });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching labels</div>;

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Labels</h1>
      <form onSubmit={handleAddLabel} className="mb-4">
        <input
          type="text"
          value={newLabelName}
          onChange={(e) => setNewLabelName(e.target.value)}
          placeholder="New Label Name"
          className="bg-gray-700 text-white rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Label
        </button>
      </form>
      <div className="flex flex-wrap">
        {labels.map((label) => (
          <span key={label.id} className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2 mb-2">
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Labels;