import {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './Context/userContext';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage ';


function App() {

  const {user, setUser} = useState( JSON.parse(localStorage.getItem("user")) || null )
  const [ verifyPage, setVerifyPage ] = useState(false);


  return (
    <div className="App">
      <UserContext.Provider value={ { user,  setUser } }  >
      <Router>
        <Routes>
          <Route exact path='/' element = { (user) ?  <HomePage /> : <RegisterPage verifyPage={verifyPage} setVerifyPage={setVerifyPage} /> } />
          <Route path='/login' element = { (user) ? <HomePage /> : <LoginPage /> } />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
