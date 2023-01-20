import { Button, Form, Input, Space } from "antd";
import { ChangeEvent, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase";

interface Props {
  onSubmit: () => void;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: FC<Props> = ({
  onSubmit,
  onEmailChange,
  onPasswordChange,
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
          <Button type="link"><Link to="/auth/register">Dont Have Account?</Link></Button>
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

export default LoginForm;
