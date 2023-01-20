import Title from "antd/es/typography/Title";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import ResetPassForm from "../components/templates/ResetPassForm ";
import { auth, sendPasswordReset } from "../firebase";

const ResetPasswordPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  if (loading) {
    return (
      <Title className="flex-center" style={{height: "80vh"}}>Loading...</Title>
    )
  }

  if (user) navigate("/");

  const onSubmit = (): void => {
    sendPasswordReset(email)
    navigate("/")
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      <ResetPassForm onEmailChange={handleEmailChange} onSubmit={onSubmit} />
    </main>
  )
}

export default ResetPasswordPage