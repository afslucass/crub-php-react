import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Row } from "antd";
import React from "react";

const Login = () => {
  return (
    <div className="login-conteiner">
      <div className="login">
        <h1>Kabum</h1>
        <Input className="login__input" placeholder="Login" type={"text"} />

        <Input.Password
          className="login__input"
          placeholder="Senha"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Row justify="space-between">
          <Button>Entrar</Button>
          <Button type="link" style={{ padding: 0, margin: 0 }}>
            Esqueceu a senha?
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Login;
