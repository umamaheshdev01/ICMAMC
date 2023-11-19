import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.css';
import home from './components/home';
import about from './components/about';
import papers from './components/papers';
import register from './components/register';
import contact from './components/contact';
import speakers from './components/speakers';
import commitee from './components/commitee';
import Vokey from './components/contacc'




function App() {
  return (

    

    <Router>

      <Navbar></Navbar>
      
    <Routes>
    
      <Route path="/" Component={home} />
      <Route path="/about" Component={about} />
      <Route path="/papers" Component={papers} />
      <Route path='/register' Component={register}/>
      <Route path='/contact' Component={contact}/>
      <Route path='/speakers' Component={speakers}/>
      <Route path='/commitee' Component={commitee}/>
      <Route path='/vokey' Component={Vokey}/>



     
  
    </Routes>

    <Footer></Footer>
  </Router>

  
  );
}

export default App;
