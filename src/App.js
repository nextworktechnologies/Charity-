import "./App.css";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import Donate from "./Layout/Donate";
import Donation from "./Layout/Donation";
import EventDetail from "./Layout/EventDetails";
import Events from "./Layout/Events";
import Home from "./Layout/Home";
import { Routes, Route } from "react-router-dom";
import Temples from "./Layout/Temples";
import TempleDetails from "./Layout/TempleDetails";
import SignIn from "./Layout/Sign-In";
import SignUp from "./Layout/Sign-Up";
import AdminRoutes from "./ProtectedRoute/AdminRoutes";
import AdminDashboard from "./Layout/Admin/AdminDashboard";
import { ToastContainer } from "react-toastify";
// import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import CreateTemple from "./Layout/Admin/create-temple";
import CreateEvents from "./Layout/Admin/Create-events";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/temple-detail/:id" element={<TempleDetails />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="/dashboard/create-temple" element={<CreateTemple />} />
        </Route>
        <Route path="/dashboard/create-events" element={<CreateEvents />} />
      </Routes>
    </>
  );
}

export default App;
