import { create } from 'zustand';

import { fetchDevelopers } from 'services/api/developerService';

import { Developer } from 'utils/Types';

type DeveloperStore = {
  developers: Developer[];
  fetchDevelopers: () => Promise<void>;
};

const useDeveloperStore = create<DeveloperStore>((set) => ({
  developers: [],
  fetchDevelopers: async () => {
    const developers = await fetchDevelopers();
    set({ developers });
  }
}));

export default useDeveloperStore;
