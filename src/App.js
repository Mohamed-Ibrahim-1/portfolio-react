import './App.css';
import Header from './sections/header';
import Landing from './sections/landing';
import TechStack from './sections/Tech Stack';
import ProjectTraining from './sections/Project Training';
import Content from './sections/content';
import Footer from './sections/footer';
import { Fragment } from 'react';



function App() {
  return (
    <div class="immg">
      <Header />
      <Landing />
      <TechStack />
      <ProjectTraining />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
