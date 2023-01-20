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
        <h1 style={{ display: "inline", margin: "auto" }}>
          <Link to="/">Home</Link>
        </h1>
        {user ? (
          <Space style={{ float: "right" }}>
            <span>Logged in as {user.email}</span>
            <Link to="/auth/logout">
              <Button type="dashed">Logout</Button>
            </Link>
          </Space>
        ) : (
          <Space style={{ float: "right" }}>
            <Link to="/auth/login">
              <Button type="dashed">Login</Button>
            </Link>
            <Link to="/auth/register">
              <Button type="dashed">Register</Button>
            </Link>
          </Space>
        )}
      </Header>
    </Layout>
  );
};

export default HeaderNav;
