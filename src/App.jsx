import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DishDetailsPage from './pages/DishDetailsPage/DishDetailsPage';
import ChefsPage from './pages/ChefsPage/ChefsPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import Confirmed from './components/Confirmed/Confirmed';
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
            <Route path='/category' element={<CategoryPage/>}/>
            <Route path='/dishDetails' element={<DishDetailsPage/>}/>
            <Route path='/chefsProfilePage' element={<ChefsPage/>}/>
            <Route path='/userProfilePage' element={<UserProfilePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/confirmed' element={<Confirmed/>}/>
            <Route path='/confirmation' element={<EmailConfirmation/>}/>


            {/* <Route path='*' element={<Navigate to="/login"/>}/> */}

        </Routes>
      </Router>


      {/* <Router>
        <Routes>
          {isAuth ?
            <>
              <Route path='/homePage' element={<HomePage />} />
              <Route path='*' element={<Navigate to='/homePage'/>} />
            </>
            :
            
            <>

              <Route path='/' element={<LoginPage />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/confirmation' element={<EmailVerification />} />
              <Route path='*' element={<Navigate to='/' />} />
            </>}

        </Routes>

      </Router> */}
    </div>
  );
}

export default App;
