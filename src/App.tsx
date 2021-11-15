import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Departments } from './components/Departments';
import { MethodsStudies } from './components/MethodsStudies';
import { Explcation } from './components/Explication';
import { OurPlans } from './components/OurPlans';
import { Depositions } from './components/ Depositions';
import { ActionMobile } from './components/ActionMobile';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Departments />
      <MethodsStudies />
      <Explcation />
      <OurPlans />
      <Depositions />
      <ActionMobile />
    </>
  );
};

export default App;
