import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Check from './Pages/Check/Check';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/check" element={
          <RequireAuth>
            <Check />
          </RequireAuth>
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
