import Link from "next/link";
import { Menu } from "antd";
import { AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';

const { Item } = Menu;

function NavBar() {
  return (
    <>
      <Menu mode="horizontal">
        <Item icon={<AppstoreOutlined />}>
          <Link href="/">App</Link>
        </Item>

        <Item icon={<LoginOutlined />}>
          <Link href="/login">Login</Link>
        </Item>

        <Item icon={<UserAddOutlined />}>
          <Link href="/register">Register</Link>
        </Item>
      </Menu>
    </>
  );
}

export default NavBar;
