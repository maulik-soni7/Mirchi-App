import useDeveloperStore from '../store/developerStore';

const useDevelopers = () => {
  const { developers, fetchDevelopers } = useDeveloperStore();

  return {
    developers,
    fetchDevelopers
  };
};

export default useDevelopers;
