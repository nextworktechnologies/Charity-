import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/authContext";
import Spinner from "../Components/Spinner";

export default function AdminRoutes() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  console.log(auth);
  useEffect(() => {
    const authCheck = async () => {
      await axios.get(`/admin-auth`).then((res) => setOk(true));
    };
    if (auth?.token) {
      authCheck();
    }
  });

  return ok ? <Outlet /> : <Spinner path={""} />;
}
