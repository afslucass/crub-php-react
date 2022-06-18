import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import { useAppDispatch } from "../../reducers/hooks";
import { logout } from "../../actions/admin";
import translate from "../../utils/translate";

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button className="nav__icon__menu-actions" onClick={handleLogout}>
      {translate("COMPONENTS.NAV.EXIT")}
    </Button>
  );
};

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">{translate("COMPONENTS.NAV.TITLE")}</div>

      <Popover
        placement="bottomRight"
        content={<UserMenu />}
        trigger="click"
        title={translate("COMPONENTS.NAV.USER")}
      >
        <Avatar className="nav__icon" size={50} icon={<UserOutlined />} />
      </Popover>
    </div>
  );
};

export default Nav;
