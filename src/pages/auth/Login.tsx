import Title from "antd/es/typography/Title";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/templates/LoginForm";
import { auth, logInWithEmailAndPassword } from "../../firebase";

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  const onSubmit = (): void => {
    logInWithEmailAndPassword(email, password);
    navigate("/")
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <main>
      <Title style={{textAlign: "center"}}>Login</Title>
      <LoginForm
        onSubmit={onSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
      />
    </main>
  );
};

export default LoginPage;
