import './App.scss';
import Footer from './ComponentsBase/Footer/Footer.js';
import Nav from './ComponentsBase/Nav/Nav.js';
import Home from './Pages/Home.js';
import SignIn from './Pages/SignIn.js'
import User from './Pages/User.js';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Provider permet de rendre le store disponible dans tous les composants React

function App() {
  return (

    <Provider>
      <>
        <header >
          <Nav></Nav>
        </header>
        <Routes>
          <Route path='/' element={<Home nom="Home" />} />
          <Route path='/login' element={<SignIn nom="login" />} />
          <Route path='/user' element={<User nom="user" />} />
        </Routes>
        <footer >
          <Footer />
        </footer>
      </>
    </Provider>
  );
}

export default App;
