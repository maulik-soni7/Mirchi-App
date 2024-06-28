import { Wrapper } from './style';

import BannerSection from './components/BannerSection';
import SecondSection from './components/SecondSection';

const Dashboard = () => {
  return (
    <Wrapper>
      <BannerSection />
      <SecondSection />
    </Wrapper>
  );
};

export default Dashboard;
