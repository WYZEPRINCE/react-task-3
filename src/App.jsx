import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterUser from "./pages/register/RegisterUser";
import Login from "./pages/LoginPage";
import { ProtectedRoute } from "./context/ProtectedRoute";
import Dashboard from "./pages/dashboard/DashboardOverview";
import Customer from "./pages/dashboard/Customer";
import NotFound from "./pages/NotFound";
import RegisterSuccess from "./pages/register/RegisterSuccess";
import InputAddress from "./pages/register/AddressInput";
import InputAddressManually from "./pages/register/AddressInputManual";
import PersonalInfo from "./pages/register/PersonalInfo";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterUser />} />
      <Route path="/inputaddress" element={<InputAddress />} />
      <Route path="/inputaddressmanual" element={<InputAddressManually />} />
      <Route path="/personalinfo" element={<PersonalInfo />} />
      <Route path="/registersuccess" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Customer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
