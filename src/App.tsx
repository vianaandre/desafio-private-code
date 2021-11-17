import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Departments } from './components/Departments';
import { MethodsStudies } from './components/MethodsStudies';
import { Explcation } from './components/Explication';
import { OurPlans } from './components/OurPlans';
import { Depositions } from './components/ Depositions';
import { ActionMobile } from './components/ActionMobile';
import { Footer } from './components/Footer';
import { FloatButtonUp } from './components/FloatButtonUp';

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
      <Footer />
      <FloatButtonUp />
    </>
  );
};

export default App;
