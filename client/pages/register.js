import Header from "../comps/Header";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Register() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e)
  {
    e.preventDefault();
    console.table({Username, Password, email});
  }
  return (
    <>
      <Header name="Register" />
      <form class="col-md-4 container offset-md-4 pb-2" onSubmit={handleSubmit}>
        <Input
          prefix={<UserOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Username"
          allowClear
          onChange={(e)=> setUsername(e.target.value)}
        />
        <Input
          prefix={<MailOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Email"
          allowClear
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Input.Password
          prefix={<LockOutlined />}
          className="mb-4 p-2 rounded"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit" class="btn btn-primary rounded col-12">
          Submit
        </button>
      </form>
    </>
  );
}
