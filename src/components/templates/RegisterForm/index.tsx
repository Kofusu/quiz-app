import { Button, Form, Input, Space } from "antd";
import { ChangeEvent, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase";

interface Props {
  onSubmit: () => void;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RegisterForm: FC<Props> = ({
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onNameChange,
}) => {
  const navigate = useNavigate()
  const loginGoogle = (): void => {
    signInWithGoogle()
    navigate("/")
  }

  return (
    <Form
      onFinish={onSubmit}
      style={{width: "50%", margin: "auto"}}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please Input Name" }]}
      >
        <Input onChange={onNameChange} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please Input Email" }]}
      >
        <Input type="email" onChange={onEmailChange} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please Input Password" }]}
      >
        <Input.Password onChange={onPasswordChange} />
      </Form.Item>

      <Form.Item>
        <Space size="large">
            <Link to="/auth/login">
          <Button type="link">
              Already Have Account?
              </Button>
              </Link>
          <Link to="/reset-password">Forgot Password</Link>
        </Space>
      </Form.Item>

      <Form.Item className="flex-center">
        <Space size="middle">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button type="default" onClick={loginGoogle}>Login with Google</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
