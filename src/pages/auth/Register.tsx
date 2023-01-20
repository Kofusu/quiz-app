import Title from "antd/es/typography/Title";
import { ChangeEvent, FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import RegisterForm from "../../components/templates/RegisterForm";
import { auth, registerWithEmailAndPassword } from "../../firebase";

const RegisterPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return (
      <Title className="flex-center" style={{height: "80vh"}}>Loading...</Title>
    )
  }

  if (user) navigate("/");

  const onSubmit = (): void => {
    registerWithEmailAndPassword(name, email, password);
    navigate("/")
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <main>
      <Title style={{textAlign: "center"}}>Register</Title>
      <RegisterForm
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onNameChange={handleNameChange}
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default RegisterPage;
