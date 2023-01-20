import { FC } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "../../firebase";

const Logout: FC = () => {
  logout()
  return (
    <Navigate to="/auth/login" />
  )
}

export default Logout