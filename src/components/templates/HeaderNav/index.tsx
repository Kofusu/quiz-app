import { Button, Layout, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import { auth } from "../../../firebase";

const HeaderNav: FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Layout>
      <Header>
        <h1 style={{display: "inline", margin: "auto"}}><Link to="/">Home</Link></h1>
        {user ? (
          <Space style={{float: "right"}}>
            <span>Logged in as {user.email}</span>
            <Button type="dashed">
              <Link to="/auth/logout">Logout</Link>
            </Button>
          </Space>
        ) : (
          <Space  style={{float: "right"}}>
            <Button type="dashed">
              <Link to="/auth/login">Login</Link>
            </Button>
            <Button type="dashed">
              <Link to="/auth/register">Register</Link>
            </Button>
          </Space>
        )}
      </Header>
    </Layout>
  );
};

export default HeaderNav;
