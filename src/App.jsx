import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useSelector } from 'react-redux';
import UserHomePage from './pages/UserHomePage/UserHomePage.jsx';
import JobsPage from './pages/JobsSearchPage/JobsSearch.jsx';
import {UserLogIn} from './pages/Auth/Login/LogIn.jsx';
import { EmployerLogIn } from './pages/Auth/Login/companyLogin.jsx';
import SignUp from './pages/Auth/Signup/SignUp.jsx';
import EmployerDashboard from './pages/Employers Dashboard/EmployerDashboard.jsx';
import EmployerSignupForm from './pages/EmployerSignup/EmployerSignup.jsx';
import AllEmployeesList from './pages/AllEmployeesList/AllEmployeesList.jsx';
import JobPostBasicForm from './pages/JobPostForm/JobPostBasicForm.jsx';
import DescribePostJobForm from './pages/JobPostForm/DescribePostJobForm.jsx';
import Testing from './pages/Testing.jsx';

function App() {
  const { theme } = useSelector((state) => state.theme);

  const Layout = () => {
    const location = useLocation();

    return (
      <>
        {location.pathname !== '/User-login' && location.pathname !=='/Employer-login' && location.pathname !== '/User-signup' && location.pathname !=='/employer/signup'&& <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<UserHomePage />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard/>}/>
          <Route path='/employees' element={<AllEmployeesList/>}/>
          <Route path="/post-job" element={<JobPostBasicForm />} />
          <Route path='/post-job/describe-job' element={<DescribePostJobForm/>}/>
          <Route path="/find/job" element={<JobsPage />} />
          <Route path="/Employer-login" element={<EmployerLogIn />} />
          <Route path="User-login" element={<UserLogIn/>}/>
          <Route path='/User-signup' element={<SignUp/>}/>
          <Route path='/employer/signup' element={<EmployerSignupForm/>}/>
          {/* <Route path='/test' element={<Testing/>}/> */}
        </Routes>
        {location.pathname !== '/User-login' && location.pathname !=='/Employer-login' && location.pathname !== '/User-signup' && location.pathname !=='/employer/signup'&&  <Footer />}
      </>
    );
  };

  return (
    <div className={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
