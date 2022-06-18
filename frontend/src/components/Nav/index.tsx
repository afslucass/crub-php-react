import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import { useAppDispatch } from "../../reducers/hooks";
import { logout } from "../../actions/admin";

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button className="nav__icon__menu-actions" onClick={handleLogout}>
      Sair
    </Button>
  );
};

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">Kabum</div>

      <Popover
        placement="bottomRight"
        content={<UserMenu />}
        trigger="click"
        title={"Usuário"}
      >
        <Avatar className="nav__icon" size={50} icon={<UserOutlined />} />
      </Popover>
    </div>
  );
};

export default Nav;
