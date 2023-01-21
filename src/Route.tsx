import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ResetPasswordPage from "./pages/ResetPassword";
import Logout from "./pages/auth/Logout";
import Question from "./pages/question/Question";
import QuestionID from "./pages/question/QuestionID";
import Result from "./pages/question/Result";

const AppRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/reset-password" element={<ResetPasswordPage />}/>
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="/question">
        <Route index element={<Question />} />
        <Route path="result" element={<Result />} />
        <Route path=":id" element={<QuestionID />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoute