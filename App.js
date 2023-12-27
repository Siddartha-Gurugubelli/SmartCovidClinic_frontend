import { Route, Routes,Navigate, } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/addAdmin';
import AddDoctor from './components/addDoctor';
import Admin from './components/admin';
import AdminDashboard from './components/adminDashboard';
import AdminNav from './components/adminNav';
import Doctor from './components/doctor';
import Login from './components/login';
import AdminPatient from './components/adminPatient';
import Reporter from './components/reporter';
import UpdateAdmin from './components/updateAdmin';
import UpdateDoctor from './components/updateDoctor';
import AddReporter from './components/addReporter';
import Medicine from './components/medicine';
import AddMedicine from './components/addMedicine';
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom';
import Logout from './components/logout'
import Signup from './components/Signup'
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPasswordComponent from './components/forgotPassword';
import Patient from './components/patient';
import UpdatePatientAppointment from './components/updatePatientAppointment';
import Profile from './components/profile';
import UpdatePatient from './components/updatePatient';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import ViewDoctors from './components/viewdoctors';
import ReporterDashboard from './components/reporterDashboard';
import DoctorStatus from './components/doctorStatus';
import UpdateDoctorStatus from './components/updateDoctorByReporter'
import ReporterProfile from './components/reporterProfile';
import ViewAppointment from './components/viewAppointment';
import ViewProfile from './components/viewProfile';
import ViewPDoctors from './components/viewPDoctors';
import PDoctor from './components/pDoctor';



function App() {
  return (
    <div>
    <BrowserRouter>
    <ToastContainer position="top-center" />
    <AdminNav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Navigate to="/" replace />}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/viewdoctors" element={<ViewDoctors/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPasswordComponent/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/addAdmin" element={<AddAdmin/>}></Route>
      <Route path="/admin/update/:id" element={<UpdateAdmin />} />
      <Route path="/doctor" element={<Doctor/>}></Route>
      <Route path="/addDoctor" element={<AddDoctor/>}/>
      <Route path="/admin/updateDoctor/:id" element={<UpdateDoctor />} />
      <Route path="/patient" element={<Patient/>}/>
      <Route path="/patient/update/:id" element={<UpdatePatientAppointment/>}/>
      <Route path="/patient/updatepatient/:id" element={<UpdatePatient/>}/>
      <Route path="/patient/viewAppointment/:id" element={<ViewAppointment/>}/>
      <Route path="/patient/viewprofile/:id" element={<ViewProfile/>}/>
      <Route path="/adminPatient" element={<AdminPatient/>}/>
      <Route path="/reporterDashboard" element={<ReporterDashboard/>}/>
      <Route path="/doctorStatus" element={<DoctorStatus/>}></Route>
      <Route path="/PDoctors" element={<PDoctor/>}/>
      <Route path="/reporter/updateDoctor/:id" element={<UpdateDoctorStatus />} />
      <Route path="/reporter" element={<Reporter/>}/>
      <Route path="/reporterProfile" element={<ReporterProfile/>}/>
      <Route path="/addReporter" element={<AddReporter/>}></Route>
      <Route path="/medicine" element={<Medicine/>}/>
      <Route path="/addMedicine" element={<AddMedicine/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
