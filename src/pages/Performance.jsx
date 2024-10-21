import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Performance() {
  const [timeFrame, setTimeFrame] = useState('All time');

  const bestSymbolsData = [
    { name: 'BTC/USD', value: 400 },
    { name: 'ETH/USD', value: 300 },
    { name: 'XRP/USD', value: 200 },
  ];

  const worstSymbolsData = [
    { name: 'LTC/USD', value: 100 },
    { name: 'BCH/USD', value: 80 },
    { name: 'EOS/USD', value: 40 },
  ];

  const mostTradedSymbolsData = [
    { name: 'BTC/USD', value: 500 },
    { name: 'ETH/USD', value: 400 },
    { name: 'XRP/USD', value: 300 },
  ];

  const profitData = [
    { name: 'Jan', profit: 4000 },
    { name: 'Feb', profit: 3000 },
    { name: 'Mar', profit: 5000 },
    { name: 'Apr', profit: 4500 },
    { name: 'May', profit: 6000 },
    { name: 'Jun', profit: 5500 },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block mb-2">Exchanges</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All Exchanges</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Accounts</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All Accounts</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Symbols</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All Symbols</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Side</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All</option>
            <option>Long</option>
            <option>Short</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-2">Dates</label>
          <select className="w-full bg-gray-700 text-white rounded p-2" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
            <option>All time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Year to date</option>
            <option>Custom</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Labels</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All Labels</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Time Frame</label>
          <select className="w-full bg-gray-700 text-white rounded p-2">
            <option>All time</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Long: 140</h2>
          <p>Win Rate: 71.11%</p>
          <p>Avg Win: 535.47</p>
          <p>Avg Loss: -161.31</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Short: 85</h2>
          <p>Win Rate: 60.00%</p>
          <p>Avg Win: 164.43</p>
          <p>Avg Loss: -153.17</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">All: 225</h2>
          <p>Win Rate: 67.56%</p>
          <p>Avg Win: 471.24</p>
          <p>Avg Loss: -148.16</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Best Symbols</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={bestSymbolsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {bestSymbolsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Worst Symbols</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={worstSymbolsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {worstSymbolsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Most Traded Symbols</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={mostTradedSymbolsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {mostTradedSymbolsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Profit Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Profit Margin Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">72.6%</h3>
            <p>Profit Margin</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Profit Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">$35.4k</h3>
            <p>Profit</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Wins Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">$48.7k</h3>
            <p>Wins</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Losses Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">$13.3k</h3>
            <p>Losses</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Average Win Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">12.3h</h3>
            <p>Average Win</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <img src="https://via.placeholder.com/50" alt="Average Loss Icon" className="mr-4" />
          <div>
            <h3 className="text-lg font-semibold">7.9h</h3>
            <p>Average Loss</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;