import axios from 'axios';

import { Developer } from 'utils/Types';

const API_URL = 'http://localhost:3001/developers';

export const fetchDevelopers = async (): Promise<Developer[]> => {
  try {
    const response = await axios.get<Developer[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching developers:', error);
    throw error;
  }
};
