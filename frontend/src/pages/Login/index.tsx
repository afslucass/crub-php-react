import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message, Row } from "antd";
import React, { useState } from "react";
import { login } from "../../actions/admin";
import { useAppDispatch } from "../../reducers/hooks";

const Login = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name && password) {
      dispatch(login(name, password));
    }
  };

  return (
    <div className="login-conteiner">
      <div className="login">
        <h1>Kabum</h1>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="login__input"
          placeholder="Login"
          type={"text"}
        />

        <Input.Password
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="login__input"
          placeholder="Senha"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Row justify="space-between">
          <Button onClick={handleLogin}>Entrar</Button>
          <Button
            onClick={() => message.success("Login: root, senha: 123123 :)")}
            type="link"
            style={{ padding: 0, margin: 0 }}
          >
            Esqueceu a senha?
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Login;
