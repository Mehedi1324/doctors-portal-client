import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="user/" element={<Home />} />
            <Route path="login/" element={<Login />} />
            <Route path="register/" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="appointment/" element={<Appointment />} />
              <Route path="dashboard/*" element={<Dashboard />} />
            </Route>


          </Routes>

        </div >

      </Router>
    </AuthProvider>
  );
}

export default App;
