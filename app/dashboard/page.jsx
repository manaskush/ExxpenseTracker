"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from '../../components/ExpenseForm';
import ExpenseList from '../../components/ExpenseList';
import InsightsChart from '../../components/InsightsChart';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [insights, setInsights] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/auth/logout', {}, { withCredentials: true });
      if (response.data.success) {
        router.push('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  const fetchExpenses = async (page = 1, limit = 10, category = '', startDate = '', endDate = '') => {
    try {
      // const response = await axios.get(/api/expenses?page=${page}&limit=${limit}&category=${category}&startDate=${startDate}&endDate=${endDate}, { withCredentials: true });
      // setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchInsights = async () => {
    try {
      // const response = await axios.get('/api/insights', { withCredentials: true });
      // setInsights(response.data);
    } catch (error) {
      console.error('Error fetching insights:', error);
    }
  };

  useEffect(() => {
    fetchExpenses(page, limit, categoryFilter, startDate, endDate);
    fetchInsights();
  }, [page, limit, categoryFilter, startDate, endDate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ExpenseForm fetchExpenses={fetchExpenses} />
        </div>
        <div>
          <ExpenseList
            expenses={expenses}
            fetchExpenses={fetchExpenses}
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
      <div className="mt-8">
        <InsightsChart insights={insights} />
      </div>
    </div>
  );
};

export default Dashboard;