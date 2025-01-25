// utils/api.js
import axios from 'axios';

export const searchRepositories = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Unable to fetch repositories');
  }
};
