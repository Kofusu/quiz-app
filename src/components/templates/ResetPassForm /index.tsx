import { Button, Form, Input, Space } from "antd";
import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase";

interface Props {
  onSubmit: () => void;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ResetPassForm: FC<Props> = ({
  onSubmit,
  onEmailChange,
}) => {
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
      <Form.Item>
        <Space size="large">
          <Button type="link"><Link to="/auth/login">Already Have Account?</Link></Button>
        </Space>
      </Form.Item>

      <Form.Item className="flex-center">
        <Space size="middle">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button type="default" onClick={signInWithGoogle}>Login with Google</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ResetPassForm;
