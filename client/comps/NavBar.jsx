import { useEffect, useState } from 'react';
import Link from "next/link";
import { Menu } from "antd";
import { AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';


const { Item } = Menu;

function NavBar() {

  const [Current, setCurrent] = useState("");
  useEffect(()=>{
    // console.log("process: " + process.browser + window.location.pathname);
    setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname]
  );
  return (
    <>
      <Menu mode="horizontal" selectedKeys={[Current]}>
        <Item key="/" icon={<AppstoreOutlined />} >
          <Link href="/">App</Link>
        </Item>

        <Item key="/login" icon={<LoginOutlined />} >
          <Link href="/login">Login</Link>
        </Item>

        <Item key="/register" icon={<UserAddOutlined />} >
          <Link href="/register">Register</Link>
        </Item>
      </Menu>
    </>
  );
}

export default NavBar;
