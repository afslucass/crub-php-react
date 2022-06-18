import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message, Row } from "antd";
import React, { useState } from "react";
import { login } from "../../actions/admin";
import { useAppDispatch } from "../../reducers/hooks";
import translate from "../../utils/translate";

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
        <h1>{translate("PAGES.LOGIN.TITLE")}</h1>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="login__input"
          placeholder={translate("PAGES.LOGIN.FIELDS.LOGIN")}
          type={"text"}
        />

        <Input.Password
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="login__input"
          placeholder={translate("PAGES.LOGIN.FIELDS.PASSWORD")}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Row justify="space-between">
          <Button onClick={handleLogin}>
            {translate("PAGES.LOGIN.ENTER")}
          </Button>
          <Button
            onClick={() =>
              message.success(translate("MESSAGES.FORGOT_PASSWORD"))
            }
            type="link"
            style={{ padding: 0, margin: 0 }}
          >
            {translate("PAGES.LOGIN.FORGOT_PASSWORD")}
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Login;
