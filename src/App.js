import './App.css';
import { Navbar, About, Contact, Hero, Portfolio, Socials  } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Socials />
      </>
  );
}

export default App;
