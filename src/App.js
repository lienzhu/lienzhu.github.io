

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';

import Layout from './components/layout/Layout';
import VLearn from './pages/projectPages/VLearn';
import CovacPage from './pages/projectPages/Covac';

import ScrollToTop from './components/ui/ScrollToTop';


function App() {
  return (
    <Layout>
      <ScrollToTop>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='/vlearn'>
          <VLearn />
        </Route>
        
        <Route path='/covac'>
          <CovacPage />
        </Route>

      </Switch>
      </ScrollToTop>
      
    
    </Layout>
  );
}

export default App;

